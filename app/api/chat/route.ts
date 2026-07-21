import { NextRequest, NextResponse } from "next/server";
import { matchAnswer, companyFacts } from "@/lib/knowledge";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type History = { role: "user" | "assistant"; content: string }[];

export async function POST(req: NextRequest) {
  let message = "";
  let history: History = [];
  try {
    const body = await req.json();
    message = String(body?.message ?? "").slice(0, 1000);
    history = Array.isArray(body?.history)
      ? (body.history.slice(-10) as History)
      : [];
  } catch {
    return NextResponse.json(
      { reply: "Sorry, I couldn't read that." },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;

  if (apiKey) {
    try {
      const model = process.env.CHAT_MODEL || "openrouter/auto";
      const system = `You are the friendly customer-support assistant for ${siteConfig.name}, an AI & software agency in Accra, Ghana. Use ONLY the facts below. Be concise (max 3 sentences), warm, and end with a soft WhatsApp CTA (${siteConfig.contact.whatsappDisplay}) when relevant.\n\n${companyFacts}`;
      const upstream = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: system },
              ...history.map((h) => ({ role: h.role, content: h.content })),
              { role: "user", content: message },
            ],
            max_tokens: 300,
            temperature: 0.4,
          }),
        }
      );
      if (upstream.ok) {
        const data = await upstream.json();
        const reply = data?.choices?.[0]?.message?.content?.trim();
        if (reply) return NextResponse.json({ reply, mode: "llm" });
      }
    } catch {
      // fall through to local knowledge base
    }
  }

  return NextResponse.json({ reply: matchAnswer(message), mode: "kb" });
}
