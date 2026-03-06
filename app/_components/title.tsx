import Image from "next/image";

export default function Title() {
  return (
    <section className="pt-8 flex items-center justify-between gap-12">
      {/* LEFT SIDE - TEXT */}
      <div>
        <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-zinc-50">
          Hello, I&apos;m Junseok!
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          I am a software engineer with a multicultural background. I studied 5
          years in the USA and completed my bachelor’s degree in Japan.
          Currently, I work as a software engineer at an ecommerce company based
          in Hamburg.
        </p>
      </div>

      {/* RIGHT SIDE - PHOTO */}
      <div className="shrink-0 relative w-40 h-40">
        <Image
          src="/profilephoto.png"
          alt="Junseok"
          fill
          className="rounded-full object-cover border border-zinc-700"
        />
      </div>
    </section>
  );
}
