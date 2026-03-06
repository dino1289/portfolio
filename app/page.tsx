"use client";

import Title from "./_components/title";
import About from "./_components/about";
import Projects from "./_components/projects";
import Contact from "./_components/contact";
import Topbar from "./_components/topbar";
// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Top bar */}
      <Topbar />

      {/* Content */}
      <main className="mx-auto max-w-5xl px-4 pt-24 pb-16 space-y-24">
        {/* Hero */}
        <Title />

        {/* About */}
        <About />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />
      </main>
    </div>
  );
}
