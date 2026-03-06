import { useEffect, useState } from "react";
import { typewriterPhrases } from "../contents/credentials";

export default function Contact() {
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
  );
}
