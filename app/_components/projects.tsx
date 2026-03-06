import { projects } from "../contents/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-zinc-50">Projects</h2>

      <div className="mt-6 space-y-10 text-zinc-400">
        {projects.map((project) => (
          <div key={project.title} className="space-y-3">
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-2 border rounded-lg hover:bg-blue-50 transition text-sm font-medium"
                >
                  {project.linkLabel}
                </a>
              )}

              <span className="text-xs text-zinc-500">
                Tech Stack: {project.tech}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
