import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-14">
      <h2 className="text-2xl font-semibold sm:text-3xl">项目展示</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* 项目卡片列表：展示截图、标题、描述与技术栈标签 */}
        {projects.map((project) => (
          <article
            key={project.name}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-fuchsia-400/40"
          >
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-5">
              <h3 className="text-lg font-medium text-white">{project.name}</h3>
              <p className="mt-2 text-sm text-white/75">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={`${project.name}-${tech}`}
                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white"
              >
                查看项目
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
