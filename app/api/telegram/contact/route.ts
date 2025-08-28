// app/api/telegram/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, company } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "name, phone, and message are required" },
        { status: 400 }
      );
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { ok: false, error: "Server not configured (missing env vars)" },
        { status: 500 }
      );
    }

    const text = [
      "📩 New Contact Message:",
      `👤 Name: ${name}`,
      email ? `📧 Email: ${email}` : "📧 Email: -",
      `📞 Phone: ${phone}`,
      `🏢 Company: ${company || "-"}`,
      `💬 Message:\n${message}`,
    ].join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );
    const data = await tgRes.json();

    if (!data.ok) {
      return NextResponse.json(
        { ok: false, error: data.description || "Telegram error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
