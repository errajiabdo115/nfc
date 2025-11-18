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
    
    // Send to Google Sheets
    const googleSheetURL = process.env.GOOGLE_SHEET_WEBHOOK_URL
    
    if (googleSheetURL) {
      await fetch(googleSheetURL, {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toLocaleString(),
        }),
      }).catch(err => console.log('[v0] Google Sheet error:', err))
    }

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
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.log('[v0] Error sending message:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
