import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[var(--border)] py-6">
      <div className="mx-auto w-full max-w-6xl px-4 text-sm text-[var(--muted-2)] sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Snow Portfolio. {t('footer.rights')}
      </div>
    </footer>
  )
}
