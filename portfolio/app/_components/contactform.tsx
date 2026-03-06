"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import type { SubmitEvent } from "react";

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const submit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        subject,
        email,
        name,
        message,
        token,
      }),
    });
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">
      {/* FORM */}

      <form onSubmit={submit} className="col-span-2 space-y-5">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>

        {/* subject */}

        <div className="relative">
          <input
            maxLength={100}
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-100"
          />

          <span className="absolute right-4 top-4 text-sm text-gray-500">
            {subject.length}/100
          </span>
        </div>

        {/* email + name */}

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              maxLength={50}
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-100"
            />

            <span className="absolute right-4 top-4 text-sm text-gray-500">
              {email.length}/50
            </span>
          </div>

          <div className="relative">
            <input
              maxLength={50}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-100"
            />

            <span className="absolute right-4 top-4 text-sm text-gray-500">
              {name.length}/50
            </span>
          </div>
        </div>

        {/* message */}

        <div className="relative">
          <textarea
            maxLength={500}
            placeholder="Enter message"
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-100"
          />

          <span className="absolute right-4 bottom-3 text-sm text-gray-500">
            {message.length}/500
          </span>
        </div>

        {/* Cloudflare Turnstile */}

        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => setToken(token)}
        />

        {/* button */}

        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl flex items-center gap-2">
          ✈️ Send message
        </button>
      </form>

      {/* SIDE CONTACT */}

      <div className="space-y-6 mt-20">
        <div className="flex items-center gap-4">
          <div className="text-blue-500 text-3xl">✉️</div>

          <div>
            <p className="font-semibold">you@email.com</p>
            <p className="text-gray-500 text-sm">Send me an email</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-blue-500 text-3xl">💬</div>

          <div>
            <p className="font-semibold">@discord</p>
            <p className="text-gray-500 text-sm">Add me on Discord</p>
          </div>
        </div>
      </div>
    </div>
  );
}
