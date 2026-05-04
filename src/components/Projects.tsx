import { projects } from '../data/projects'
import { useTranslation } from 'react-i18next'

export function Projects() {
  const { t } = useTranslation()
  const categories = ['个人工具', 'AI应用', '全栈应用', '小程序'] as const
  const categoryTitleColorMap: Record<(typeof categories)[number], string> = {
    个人工具: 'text-cyan-300',
    AI应用: 'text-fuchsia-300',
    全栈应用: 'text-emerald-300',
    小程序: 'text-amber-300',
  }
  const categoryIconMap: Record<(typeof categories)[number], string> = {
    个人工具: '🧰',
    AI应用: '🤖',
    全栈应用: '🧩',
    小程序: '📱',
  }
  const getAutoPreviewImage = (
    link: string,
    fallbackImage: string,
    version: string,
  ) => {
    if (!link || link === '#') {
      return fallbackImage
    }

    // 将版本参数注入到目标站点 URL，再交给截图服务，尽可能触发重新抓取。
    const separator = link.includes('?') ? '&' : '?'
    const versionedTargetUrl = `${link}${separator}snapshot_version=${encodeURIComponent(version)}`

    // 优先加载自动网页截图，失败时由 onError 回退到项目原图。
    return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(versionedTargetUrl)}?w=1200`
  }

  return (
    <section id="projects" className="py-10 sm:py-14">
      <h2 className="text-2xl font-semibold sm:text-3xl">{t('projects.title')}</h2>
      <div className="mt-6 space-y-8">
        {categories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category)

          return (
            <div key={category}>
              <h3 className={`mb-4 text-xl font-medium ${categoryTitleColorMap[category]}`}>
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true">{categoryIconMap[category]}</span>
                  <span>
                    {category === '全栈应用' ? `${category}（需要vpn访问）` : category}
                  </span>
                </span>
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* 项目卡片列表：展示截图、标题、描述与技术栈标签 */}
                {categoryProjects.map((project) => (
                  <article
                    key={project.name}
                    className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition hover:-translate-y-1 hover:border-fuchsia-400/40"
                  >
                    <img
                      src={getAutoPreviewImage(project.link, project.image, project.version)}
                      alt={project.name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null
                        event.currentTarget.src = project.image
                      }}
                      className="h-48 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                    <div className="p-5">
                      <h4 className="text-lg font-medium text-[var(--fg)]">{project.name}</h4>
                      <p className="mt-2 text-sm text-[var(--muted)]">{project.description}</p>
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
                      <div className="mt-4 flex flex-wrap gap-3">
                        {/* 小程序无线上访问入口，不展示「查看项目」 */}
                        {project.category !== '小程序' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white"
                          >
                            {t('projects.view')}
                          </a>
                        )}
                        {project.sourceLink?.trim() ? (
                          <a
                            href={project.sourceLink.trim()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-md border border-cyan-300/40 bg-cyan-300/5 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10"
                          >
                            {t('projects.viewSource')}
                          </a>
                        ) : (
                          <span
                            className="inline-flex cursor-not-allowed rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted)] opacity-60"
                            title={t('projects.sourcePending')}
                            aria-disabled="true"
                          >
                            {t('projects.viewSource')}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
