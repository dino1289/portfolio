"use client";

import { useEffect, useState } from "react";

type Credential = {
  language: string;
  level: string;
  link?: string;
};

const typewriterPhrases = [
  "🇰🇷 Seoul — where my journey began",
  "🇺🇸 USA — 5 years of independence",
  "🇯🇵 Tokyo — where I found my passion",
  "🇩🇪 Hamburg — Career begins",
];

const credentials: Credential[] = [
  {
    language: "Korean",
    level: "Native",
  },
  {
    language: "English",
    level: "C1 Certified",
    link: "https://drive.google.com/file/d/1dEZGfeZQ4b9ShWCa33mVyfCM7gXYdDKs/view?usp=drive_link",
  },
  {
    language: "Japanese",
    level: "C1 Certified",
    link: "https://drive.google.com/file/d/1V7S2QgGSL3YP7FAYTXqwH4gsYnrXzHjk/view?usp=drive_link",
  },
  {
    language: "German",
    level: "B1 → C1 (in progress)",
    link: "https://drive.google.com/file/d/1XxBJvfohv7MCVLiqi8z5iQhppBzRncaC/view?usp=drive_link",
  },
];

// app/page.tsx
export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    const typingSpeed = 90;
    const deletingSpeed = 50;
    const pauseAtEnd = 1500;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAtEnd);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentText = typewriterPhrases[phraseIndex].slice(0, charIndex);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-zinc-200">
            <span>Junseok Choi</span>
            <span className="h-4 w-px bg-zinc-700" />
            <span className="text-zinc-400 min-h-[1.2rem]">
              {currentText}
              <span className="inline-block w-px h-4 bg-cyan-400 ml-1 animate-pulse" />
            </span>
          </div>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-zinc-50">
              About
            </a>
            <a href="#projects" className="hover:text-zinc-50">
              Projects
            </a>
            <a href="#contact" className="hover:text-zinc-50">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-4 pt-24 pb-16 space-y-24">
        {/* Hero */}
        <section className="pt-8">
          <p className="text-sm font-medium text-cyan-400">Portfolio</p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-zinc-50">
            Hello, I&apos;m Junseok!
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            I am a software engineer with a multi cultural background. I have
            studied 5 years in USA and 4 years Bachelor in Japan. Currently, I
            am a software engineer at Ecommerce Company based in Hamburg.
          </p>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-zinc-50">About</h2>
          <div className="mt-4 space-y-3 text-zinc-400">
            <p>
              My Bachelor degree is in Bio Engineering with a focus on LLM and
              Mobile Application.
            </p>
            <p>
              Currently, I am working at Ecommerce Company at a team with many
              different nationalities and backgrounds based in Hamburg for the
              last 2 and a half years.
            </p>
            <p>
              My Passion is learning languages and cultures. I can speak Korean,
              English, Japanese, and German. I am bringing my German level to
              business by speaking in German during daily business.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {credentials.map((cred) =>
                cred.link ? (
                  <a
                    key={cred.language}
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded-lg hover:bg-blue-50 transition text-sm font-medium"
                  >
                    {cred.language} — {cred.level}
                  </a>
                ) : (
                  <button
                    key={cred.language}
                    disabled
                    className="px-4 py-2 border rounded-lg text-sm font-medium cursor-default bg-zinc-900/50 border-zinc-700 text-zinc-200"
                  >
                    {cred.language} — {cred.level}
                  </button>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-zinc-50">Projects</h2>
          <div className="mt-4 space-y-3 text-zinc-400">
            <p>
              Bachelor Thesis: I developed a mobile application for wasabi
              farmers in Shizuoka, Japan. The application is a tool for farmers
              to manage their wasabi cultivation and harvest.
            </p>

            <p>
              Problem: Japan’s agricultural workforce is rapidly aging, with
              nearly 60% of farmers over the age of 65. As many farmers enter an
              age group where eyesight, reaction speed, and physical stamina
              naturally decline, it becomes increasingly difficult to closely
              monitor crops and detect issues such as disease or damage in time.
            </p>

            <p>
              Solution: develop a mobile application to help farmers to manage
              sick wasabi leaves, preventing them from going to waste and reduce
              the risk of wasabi crop failure.
            </p>

            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://docs.google.com/document/d/1-AWNX-UgqNro4LMG2SynaI-PMgRPmYm4/edit?usp=sharing&ouid=116813093996339607329&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 border rounded-lg hover:bg-blue-50 transition text-sm font-medium"
              >
                View thesis (EN)
              </a>
              <span className="text-xs text-zinc-500">
                Tech Stack: Kotlin(Compose Multiplatform) Firebase{" "}
              </span>
            </div>

            <p>
              Mobile App "Peoples" - teamed up with 6 other teammates to develop
              a mobile application for a startup in Seoul, Korea.
            </p>

            <p className="mt-3">
              Roles were: Frontend Developer(4, 2 on Ios and 2 on Android),
              Backend Developer(1), and UI/UX Designer(1), Product Manager(1) My
              Role: Frontend Developer(Android)
            </p>

            <p>
              Problem: Currently, there was no ground for linking students to
              gather up and share their knowledge regarding job interview
              preparation, tech meetups, language learning, &quot;mogakko&quot;
              (programmers gather up and together and work individually)
            </p>

            <p>
              Solution: develop a mobile application to help students to gather
              up and real time check ins in study groups, track attendance and
              motivate them to study together consistently.
            </p>

            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://mountain-bovid-6db.notion.site/Do-you-still-manage-study-sessions-with-Excel-Peoples-is-here-to-help-8617df571a654fd0b213ad7a05ce19f3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 border rounded-lg hover:bg-blue-50 transition text-sm font-medium"
              >
                Project Description
              </a>

              <span className="text-xs text-zinc-500">
                Tech Stack: Kotlin(Compose Multiplatform) Firebase{" "}
              </span>
            </div>

            <p>
              Language Learning Support Platform: developed a website for Korean
              Learning Students where they can post questions and answers
              regarding Korean language and culture. On top of that, they learn
              with the help of AI quiz generator.
            </p>

            <p>
              Problem: Reddit/Korean or other big community websites are
              friendly for posting questions and answers, but not for learning
              what they discussed.
            </p>

            <p>
              Solution: develop a website where they can post questions and
              answers regarding Korean language and culture. Tech Stack:
              Next.js, Tailwind CSS, Shadcn UI, Firebase, Claude, Vercel(for
              deployment) On top of that, they learn with the help of AI quiz
              generator.
            </p>

            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://rollooverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 border rounded-lg hover:bg-blue-50 transition text-sm font-medium"
              >
                Korean Language Learning Platform
              </a>
              <span className="text-xs text-zinc-500">
                Tech Stack: Kotlin(Compose Multiplatform) Firebase{" "}
              </span>
            </div>

            <p>
              Drop Shipping between Germany and Korea: developed mobile apps on
              both platform for customers in Korea where they can browse unique
              popular products from Germany and easy to track the shipping
              status.
            </p>
            <p>
              Problem: drop shipping on major Ecommerce platforms like Coupang
              or Naver Shopping incurs lots of seller fees and non-transparent
              shipping status if products are delivered from foreign countries.
            </p>
            <p>
              Solution: develop mobile apps that can be easily shoppable with
              minimum amount of personal info(including PCCC orPersonal Customs
              Clearance Code)and trackable at any time and place.
            </p>

            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://rollooverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 py-2 border rounded-lg hover:bg-blue-50 transition text-sm font-medium"
              >
                Project Description
              </a>

              <span className="text-xs text-zinc-500">
                Tech Stack: Kotlin(Compose Multiplatform) Firebase{" "}
              </span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-zinc-50">Contact</h2>
          <div className="mt-4 space-y-3 text-zinc-400">
            <p>
              email : choijunseok1997@gmail.com
              <br />
              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
