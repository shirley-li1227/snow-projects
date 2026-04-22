import { useEffect, useMemo, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  // 默认返回深色主题
  return 'dark'
}

function applyThemeToDom(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.dataset.theme = theme
}

export function useTheme() {
  const initial = useMemo<Theme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      // 忽略读取失败
    }
    return getSystemTheme()
  }, [])

  const [theme, setTheme] = useState<Theme>(initial)

  useEffect(() => {
    applyThemeToDom(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // 忽略写入失败
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, setTheme, toggleTheme }
}

