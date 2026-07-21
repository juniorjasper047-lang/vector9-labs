"use server";

import { z } from "zod";
import { siteConfig } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (10+ characters)"),
});

export type ContactState = { ok: boolean; message: string };

export async function submitContact(formData: FormData): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check your details and try again.",
    };
  }

  const { name, email, company, message } = parsed.data;

  // Best-effort local store (works in dev; serverless FS is ephemeral).
  try {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, "contact-submissions.json");
    let arr: unknown[] = [];
    try {
      const raw = await fs.readFile(file, "utf8");
      arr = JSON.parse(raw);
    } catch {
      /* no file yet */
    }
    arr.push({
      name,
      email,
      company: company ?? null,
      message,
      at: new Date().toISOString(),
    });
    await fs.writeFile(file, JSON.stringify(arr, null, 2));
  } catch {
    /* ignore — ephemeral FS on Vercel */
  }

  // Optional email delivery when RESEND_API_KEY is configured.
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Vector9 Labs <hello@vector9labs.com>",
        to: [siteConfig.contact.email],
        replyTo: email,
        subject: `New enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? "-"}\n\n${message}`,
      });
    } catch {
      /* delivery failed; still confirm to the user */
    }
  }

  return {
    ok: true,
    message: "Thanks! We'll be in touch within 24 hours.",
  };
}
