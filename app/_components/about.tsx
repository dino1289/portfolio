import { credentials } from "../contents/credentials";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-zinc-50">About</h2>

      <div className="mt-4 space-y-3 text-zinc-400">
        <p>
          My Bachelor degree is in Bio Engineering with a focus on LLM and
          Mobile Application.
        </p>

        <p>
          Currently, I am working at an ecommerce company with an international
          team based in Hamburg for the last two and a half years.
        </p>

        <p>
          My passion is learning languages and cultures. I can speak Korean,
          English, Japanese, and German.
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
  );
}
