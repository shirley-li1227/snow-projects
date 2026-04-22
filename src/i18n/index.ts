import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export type AppLanguage = 'zh' | 'en'

const STORAGE_KEY = 'lang'

function getInitialLanguage(): AppLanguage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'zh' || saved === 'en') return saved
  } catch {
    // 忽略读取失败
  }

  const navLang = (navigator.language || '').toLowerCase()
  return navLang.startsWith('zh') ? 'zh' : 'en'
}

export const resources = {
  zh: {
    translation: {
      nav: {
        about: '关于我',
        projects: '项目',
        contact: '联系',
      },
      hero: {
        badge: '🤖 + 🧠 = 🚀',
        title: '你好，这里是 Snow 的作品集',
        subtitle: '我的编程副驾是 AI，方向盘还在我手上',
        desc: '这个网站 + 里面所有项目 = 人机协作的产物',
        avatarAlt: 'Snow 的头像',
        visitorCount: '本网站访问人次',
      },
      about: {
        title: '关于我',
      },
      projects: {
        title: '项目展示',
        view: '查看项目',
      },
      contact: {
        title: '联系方式',
        email: '邮箱',
        github: 'GitHub',
        social: '社交媒体',
      },
      footer: {
        rights: '版权所有。',
      },
      controls: {
        themeDark: '🌙',
        themeLight: '☀️',
        langZh: '中文',
        langEn: 'English',
        toggleThemeAria: '切换深色/浅色主题',
        toggleLangAria: '切换语言',
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        badge: '🤖 + 🧠 = 🚀',
        title: "Hi, I'm Snow",
        subtitle: 'AI is my co-pilot, but I keep the wheel',
        desc: 'This site and the projects here are built with human + AI collaboration.',
        avatarAlt: "Snow's avatar",
        visitorCount: 'Website visitors',
      },
      about: {
        title: 'About',
      },
      projects: {
        title: 'Projects',
        view: 'View project',
      },
      contact: {
        title: 'Contact',
        email: 'Email',
        github: 'GitHub',
        social: 'Social',
      },
      footer: {
        rights: 'All rights reserved.',
      },
      controls: {
        themeDark: '🌙',
        themeLight: '☀️',
        langZh: '中文',
        langEn: 'English',
        toggleThemeAria: 'Toggle light/dark theme',
        toggleLangAria: 'Switch language',
      },
    },
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // 忽略写入失败
  }
  document.documentElement.lang = lng
})

export { i18n }

