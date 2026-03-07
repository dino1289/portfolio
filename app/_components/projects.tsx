import Image from "next/image";
import { projects } from "../contents/projects";
import { Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-zinc-50">Projects</h2>

      <div className="mt-6 space-y-16 text-zinc-400">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            {/* LEFT SIDE */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-200">
                {project.title}
              </h3>

              <p>{project.overview}</p>

              <p>
                <span className="font-medium text-zinc-200">Problem:</span>{" "}
                {project.problem}
              </p>

              <p>
                <span className="font-medium text-zinc-200">Solution:</span>{" "}
                {project.solution}
              </p>

              <div className="mt-3 flex items-center gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-10 px-4 border rounded-lg hover:bg-blue-50 transition text-sm font-medium"
                  >
                    {project.demoLinkLabel}
                  </a>
                )}

                {project.githubRepoLink && (
                  <a
                    href={project.githubRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 border rounded-lg hover:bg-blue-50 transition"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
              <span className="text-xs text-zinc-500">
                Tech Stack: {project.tech}
              </span>
            </div>

            {/* RIGHT SIDE IMAGES */}
            <div className="flex flex-wrap gap-4">
              {project.images?.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={120}
                  height={120}
                  className="rounded-xl object-cover border border-zinc-700"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
