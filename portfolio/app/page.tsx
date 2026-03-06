// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-zinc-200">
            Junseok Choi from Seoul, Korea
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
              English, Japanese, and German. I hold official certificates for
              English(C1) and Japanese(C1) and German(B1 on the way to C1).
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-zinc-50">Projects</h2>
          <div className="mt-4 space-y-3 text-zinc-400">
            <p>
              <sub>
                Bachelor Thesis: I developed a mobile application for wasabi
                farmers in Shizuoka, Japan. The application is a tool for
                farmers to manage their wasabi cultivation and harvest.
              </sub>

              <sub>
                Problem: aging population
                {">"} eye sight problem of farmers.
              </sub>

              <sub>
                Solution: develop a mobile application to help farmers to manage
                sick wasabi leaves, preventing them from going to waste and
                reduce the risk of wasabi crop failure.
              </sub>
            </p>
            <p>
              <sub>
                before graduation: I teamed up with 6 other teammates to develop
                a mobile application for a startup in Seoul, Korea.
              </sub>

              <sub>
                Roles were: Frontend Developer(4, 2 on Ios and 2 on Android),
                Backend Developer(1), and UI/UX Designer(1), Product Manager(1)
                My Role: Frontend Developer(Android)
              </sub>
              <sub>
                Problem: Currently, there was no ground for linking students to
                gather up and share their knowledge regarding job interview
                preparation, tech meetups, language learning,
                &quot;mogakko&quot; (programmers gather up and together and work
                individually)
              </sub>

              <sub>
                Solution: develop a mobile application to help students to
                gather up and real time check ins in study groups, track
                attendance and motivate them to study together consistently.
              </sub>
            </p>
            <p>
              <sub>
                Side Project: developed a website for Korean Learning Students
                where they can post questions and answers regarding Korean
                language and culture. On top of that, they learn with the help
                of AI quiz generator.
              </sub>
              <sub>
                Problem: Reddit/Korean or other big community websites are
                friendly for posting questions and answers, but not for learning
                what they discussed.
              </sub>
              <sub>
                Solution: develop a website where they can post questions and
                answers regarding Korean language and culture. Tech Stack:
                Next.js, Tailwind CSS, Shadcn UI, Firebase, Claude, Vercel(for
                deployment) On top of that, they learn with the help of AI quiz
                generator.
              </sub>
            </p>
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
