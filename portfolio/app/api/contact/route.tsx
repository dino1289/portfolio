import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const verify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: body.token,
      }),
    },
  );

  const data = await verify.json();

  if (!data.success) {
    return NextResponse.json({ error: "captcha failed" });
  }

  // send email here

  return NextResponse.json({ success: true });
}
