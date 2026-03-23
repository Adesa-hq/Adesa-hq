import { z } from "zod";
import { Resend } from "resend";
import { contactEmailTemplate } from "@/components/Email/contactEmailTemplate";

const resend = new Resend(process.env.RESEND_CONTACT_API_KEY);

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { firstName, lastName, email, service, message } = parsed.data;

    await resend.emails.send({
      from: `Adesa media Website Contact <${process.env.RESEND_FROM}>`,
      to: [process.env.RESEND_ADMIN],
      replyTo: email,
      subject: `New Contact: ${service}`,
      html: contactEmailTemplate({
        name: `${firstName} ${lastName}`,
        email,
        subject: service,
        message,
      }),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return Response.json({ error: "Send failed" }, { status: 500 });
  }
}
