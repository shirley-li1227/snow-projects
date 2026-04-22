import { useTranslation } from 'react-i18next'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-10 sm:py-14">
      <h2 className="text-2xl font-semibold sm:text-3xl">{t('contact.title')}</h2>
      <div className="mt-6 grid gap-4 text-sm text-[var(--muted)] sm:grid-cols-3">
        <a
          href="mailto:moningmo@163.com"
          className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 hover:bg-black/5 dark:hover:bg-white/10"
        >
          {t('contact.email')}：moningmo@163.com
        </a>
        <a
          href="https://github.com/shirley-li1227"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 hover:bg-black/5 dark:hover:bg-white/10"
        >
          {t('contact.github')}：@snow
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 hover:bg-black/5 dark:hover:bg-white/10"
        >
          微信：moninglxy
        </a>
      </div>
    </section>
  )
}
