import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/contact-schema";
import { personal } from "@/config/personal";

/** Discord embed accent — matches the site accent (iris). */
const EMBED_COLOR = 0x7c6cf0;

export async function POST(request: Request) {
  let body: Partial<ContactInput>;
  try {
    body = (await request.json()) as Partial<ContactInput>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — silently accept bots without delivering.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) {
    console.error("DISCORD_WEBHOOK_URL is not configured.");
    return NextResponse.json(
      { error: "Messaging is temporarily unavailable. Please email instead." },
      { status: 503 },
    );
  }

  const name = body.name!.trim();
  const email = body.email!.trim();
  const company = body.company?.trim() || "—";
  const subject = body.subject!.trim();
  const message = body.message!.trim();

  const embed = {
    username: `${personal.name} · Portfolio`,
    embeds: [
      {
        title: "📨 New contact message",
        description: `**${subject}**`,
        color: EMBED_COLOR,
        fields: [
          { name: "Name", value: name, inline: true },
          { name: "Email", value: email, inline: true },
          { name: "Company", value: company, inline: true },
          { name: "Message", value: message.slice(0, 1024) },
        ],
        footer: { text: "Portfolio contact form" },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(embed),
    });

    if (!res.ok) {
      console.error("Discord webhook failed:", res.status, await res.text());
      return NextResponse.json(
        { error: "Could not deliver your message. Please email instead." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Discord webhook error:", err);
    return NextResponse.json(
      { error: "Could not deliver your message. Please email instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
