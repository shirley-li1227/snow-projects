import { useCallback, useEffect, useMemo, useState } from 'react'
import { i18n, type AppLanguage } from '../i18n'

const SUPPORTED: AppLanguage[] = ['zh', 'en']

export function useLanguage() {
  const initial = useMemo<AppLanguage>(() => {
    const lng = i18n.language as AppLanguage
    return SUPPORTED.includes(lng) ? lng : 'zh'
  }, [])

  const [language, setLanguage] = useState<AppLanguage>(initial)

  useEffect(() => {
    const onChange = (lng: string) => {
      if (lng === 'zh' || lng === 'en') setLanguage(lng)
    }
    i18n.on('languageChanged', onChange)
    return () => {
      i18n.off('languageChanged', onChange)
    }
  }, [])

  const changeLanguage = useCallback(async (lng: AppLanguage) => {
    await i18n.changeLanguage(lng)
  }, [])

  const toggleLanguage = useCallback(async () => {
    await changeLanguage(language === 'zh' ? 'en' : 'zh')
  }, [changeLanguage, language])

  return { language, changeLanguage, toggleLanguage }
}

