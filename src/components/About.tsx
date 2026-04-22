import { skills } from '../data/skills'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-10 sm:py-14">
      <h2 className="text-2xl font-semibold sm:text-3xl">{t('about.title')}</h2>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">
        我热爱将设计与工程结合，注重组件复用、性能表现与移动端适配，致力于打造可持续迭代的项目。
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <SkillCard title="前端技术" values={skills.frontend} />
        <SkillCard title="动画交互" values={skills.animation} />
        <SkillCard title="工程能力" values={skills.engineering} />
      </div>
    </section>
  )
}

type SkillCardProps = {
  title: string
  values: string[]
}

function SkillCard({ title, values }: SkillCardProps) {
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <h3 className="text-base font-medium">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </article>
  )
}
