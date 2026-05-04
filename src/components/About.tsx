import { skillGroups } from '../data/skills'
import { projects } from '../data/projects'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()
  const projectCount = projects.length

  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-14">
      <h2 className="text-2xl font-semibold sm:text-3xl">{t('about.title')}</h2>

      <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-fuchsia-500/[0.07] via-[var(--card)] to-cyan-400/[0.07] p-6 sm:p-10">
        <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">{t('about.lead')}</p>
        <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">{t('about.detail')}</p>
        <p className="mt-5 text-sm leading-relaxed text-[var(--muted-2)] sm:text-base">
          <span className="font-medium text-cyan-300/95">{t('about.stats', { count: projectCount })}</span>
        </p>
        <a
          href="#projects"
          className="mt-6 inline-flex rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(217,70,239,0.2)] transition hover:opacity-95 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)]"
        >
          {t('about.exploreProjects')}
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard
            key={group.id}
            title={t(`about.skills.${group.id}`)}
            items={group.items}
          />
        ))}
      </div>
    </section>
  )
}

type SkillCardProps = {
  title: string
  items: string[]
}

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <article className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition duration-300 hover:border-cyan-400/35 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)]">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent"
        aria-hidden
      />
      <h3 className="text-base font-medium text-[var(--fg)]">{title}</h3>
      <ul className="mt-3 space-y-2.5 text-sm text-[var(--muted)]">
        {items.map((value) => (
          <li key={value} className="flex gap-2.5">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400"
              aria-hidden
            />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
