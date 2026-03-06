import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-zinc-50">Contact</h2>

      <div className="mt-4 flex items-center gap-4 text-zinc-400">
        <a
          href="mailto:choijunseok1997@gmail.com"
          className="text-zinc-400 hover:text-cyan-400 transition"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:opacity-80 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </section>
  );
}
