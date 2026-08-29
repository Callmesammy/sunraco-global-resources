import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY environment variable is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, selectedServices, budget, message } = body;

    const servicesList = Array.isArray(selectedServices) ? selectedServices.join(", ") : selectedServices || "Not specified";

    const data = await resend.emails.send({
      from: "sgr Global <onboarding@resend.dev>",
      to: ["sunracoglobalresources@gmail.com"],
      replyTo: email,
      subject: `🚀 New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0A0A0A; color: #FFFFFF; padding: 30px; border-radius: 8px;">
          <h1 style="color: #FF5500; font-size: 24px; border-bottom: 2px solid #222; padding-bottom: 12px; margin-top: 0;">
            sgr. New Client Project Inquiry
          </h1>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px; color: #EEEEEE;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 180px; color: #888888;">Client Name:</td>
              <td style="padding: 10px; color: #FFFFFF; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #888888;">Email Address:</td>
              <td style="padding: 10px;"><a href="mailto:${email}" style="color: #FF5500; text-decoration: none; font-weight: bold;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #888888;">Requested Services:</td>
              <td style="padding: 10px; color: #C084FC; font-weight: bold;">${servicesList}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #888888;">Estimated Budget:</td>
              <td style="padding: 10px; color: #4ADE80; font-weight: bold;">${budget || "Not specified"}</td>
            </tr>
            ${
              message
                ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #888888; vertical-align: top;">Additional Details:</td>
              <td style="padding: 10px; background-color: #141414; border: 1px solid #333; border-radius: 4px; color: #DDDDDD;">${message}</td>
            </tr>
            `
                : ""
            }
          </table>
          <div style="margin-top: 30px; font-size: 12px; color: #666666; border-top: 1px solid #222; padding-top: 15px;">
            Sent automatically via sgr Global Web Intake System • Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Email Transmission Error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to transmit inquiry email." },
      { status: 500 }
    );
  }
}
