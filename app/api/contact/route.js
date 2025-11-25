export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, services } = body;

    /* ---------------------------------
       MAILTRAP SMTP CONFIG
    ---------------------------------- */
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailHTML = `
      <div style="font-family: Arial; padding: 20px;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Services:</strong> ${services.join(", ")}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    // mailtrap receives it in inbox automatically
    await transport.sendMail({
      from: `"Website Contact" <no-reply@yourdomain.com>`,
      to: "mailtrap@example.com", // this email is overridden by Mailtrap inbox
      subject: "New Website Contact Submission",
      html: mailHTML,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
