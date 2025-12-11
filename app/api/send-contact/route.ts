import { WithImplicitCoercion } from 'buffer'
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
const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc3c9HhVunsX9i6GIasyvtZOHhrXjFQNprv48iP_ZFv61SRew/formResponse';

const data = new URLSearchParams();
data.append('entry.43128502', formData.name);          // Name
data.append('entry.881573108', formData.email);        // Email
data.append('entry.1694349985', formData.phone);       // Phone
data.append('entry.598163541_year', formData.year);           // Year
data.append('entry.598163541_month', formData.month);           // Month
data.append('entry.598163541_day', formData.day);   
data.append('entry.598163541', formData.message);        // Day


type FileAttachment = { name: string; data: string }

const files: FileAttachment[] = Array.isArray(formData.files) ? formData.files : []

const attachments = files.map((file: FileAttachment) => ({
  filename: file.name,
  content: Buffer.from(file.data.split(',')[1], 'base64'),
}))

await fetch(formUrl, { method: 'POST', body: data });
    // Send Email Notification
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'abdelkarimerraji4@gmail.com',
      subject: `New Contact Message from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Year:</strong> ${formData.year || 'Not provided'}</p>
        <p><strong>Month:</strong> ${formData.month || 'Not provided'}</p>
        <p><strong>Day:</strong> ${formData.day || 'Not provided'}</p>

        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
      attachments,
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
