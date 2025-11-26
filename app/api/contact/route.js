export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message, services } = body; // ⭐ phone added

    if (!name || !email || !phone || !message || !services?.length) {
      return NextResponse.json({ success: false, error: "Missing required fields." });
    }

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
        <h2 style="color:#ae5c83;">New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services Interested:</strong> ${services.join(", ")}</p>
        <p><strong>Message:</strong><br/>${message}</p>

        <br/>
        <hr />
        <small style="color:gray;">This message was sent from your website quote popup.</small>
      </div>
    `;

    await transport.sendMail({
      from: `"Website Quote Form" <no-reply@yourdomain.com>`,
      to: "mailtrap@example.com", // Mailtrap inbox catches this automatically
      subject: `📩 New Quote Request from ${name}`,
      html: mailHTML,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log("❌ Email Error:", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
