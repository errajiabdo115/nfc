import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()

    const timestamp = new Date().toLocaleString()

    const files: { name: string; data: string }[] = Array.isArray(formData.files) ? formData.files : []

    // Log to Google Sheets (via Google Forms submission)
    const formURL = process.env.GOOGLE_SHEET_WEBHOOK_URL
    if (formURL) {
      const params = new URLSearchParams()
      params.append('entry.43128502', formData.name)
      params.append('entry.881573108', formData.email)
      params.append('entry.1694349985', formData.phone || '')
      params.append('entry.598163541', formData.message)
      fetch(formURL, { method: 'POST', body: params }).catch(err =>
        console.log('[contact] Google Sheet error:', err)
      )
    }

    const attachments = files.map(file => ({
      filename: file.name,
      content: Buffer.from(file.data.split(',')[1] || file.data, 'base64'),
    }))

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'abdelkarimerraji4@gmail.com',
      subject: `New Contact Message from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted at:</strong> ${timestamp}</p>
      `,
      attachments,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.log('[contact] Error sending message:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
