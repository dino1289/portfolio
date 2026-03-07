"use client";

import About from "./_components/about";
import Contact from "./_components/contact";
import ExperienceTimeline from "./_components/timeline";
import Projects from "./_components/projects";
import Title from "./_components/title";
import Topbar from "./_components/topbar";

// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Top bar */}
      <Topbar />
      {/* Content */}
      <main className="mx-auto max-w-5xl px-4 pt-24 pb-16 space-y-24">
        {/* Title */}
        <Title />
        <ExperienceTimeline />

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
