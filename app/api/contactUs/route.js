
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message, services } = body;

    // --- 1. SERVER-SIDE VALIDATION ---
    // Strictly require Name, Phone, and Message.
    // Email and Services are optional.
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Name, Phone, and Message are required." },
        { status: 400 }
      );
    }

    // --- 2. MAILTRAP CONFIGURATION ---
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER, // Ensure these are in .env.local
        pass: process.env.MAILTRAP_PASS,
      },
    });

    // --- 3. FORMAT DATA FOR EMAIL ---
    const emailDisplay = email ? email : "Not Provided";
    // Handle services safely (if it's undefined or empty)
    const servicesDisplay = (services && services.length > 0) 
      ? services.join(", ") 
      : "General Inquiry";

    const mailHTML = `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px;">
        <h2 style="color: #ae5c83; margin-bottom: 20px;">New Contact Form Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${emailDisplay}</td>
          </tr>
           <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Services:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${servicesDisplay}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <p style="font-weight: bold;">Message:</p>
          <p style="background-color: #f8fafc; padding: 15px; border-radius: 5px; color: #334155;">
            ${message}
          </p>
        </div>

        <br/>
        <small style="color: #94a3b8; font-size: 12px;">Sent via Next.js Contact API</small>
      </div>
    `;

    // --- 4. SEND EMAIL ---
    await transport.sendMail({
      from: `"Website Contact" <no-reply@vstbiz.com>`,
      to: "test@example.com", // This goes to your Mailtrap Inbox
      subject: `📩 New Inquiry from ${name}`,
      html: mailHTML,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("❌ API Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}