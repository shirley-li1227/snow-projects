import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export type AppLanguage = "zh" | "en";

const STORAGE_KEY = "lang";

function getInitialLanguage(): AppLanguage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    // 忽略读取失败
  }

  const navLang = (navigator.language || "").toLowerCase();
  return navLang.startsWith("zh") ? "zh" : "en";
}

export const resources = {
  zh: {
    translation: {
      nav: {
        about: "关于我",
        projects: "项目",
        contact: "联系",
      },
      hero: {
        badge: "🤖 + 🧠 = 🚀",
        title: "你好，这里是 Snow",
        subtitle: "我的编程副驾是 AI，方向盘还在我手上",
        desc: "这个网站 + 里面所有项目 = 人机协作的产物",
        avatarAlt: "Snow 的头像",
        visitorCount: "本网站访问人次",
      },
      about: {
        title: "关于我",
        lead:
          "你好，我是 Snow。作品集中大部分项目来自「人机协作」迭代：我负责架构与产品取舍，用 AI 加速编码与文档，再把可上线的结果沉淀成独立仓库与演示地址。",
        detail:
          "技术侧我习惯以 React + TypeScript + Vite 做主栈，也做过 Vue 3 全栈工具；在 AI 应用里对接过大模型对话、流式写作、文生图与语音转写；在全栈与边缘场景里用 Cloudflare Workers + Hono + D1（及 KV）部署博客、社区、商城与 GitHub 学习助手；此外还有微信原生小程序的本地记账实践。我关注组件复用、移动端体验与性能（如图片懒加载、按需请求），也乐于把复杂能力拆成用户能一眼看懂的产品形态。",
        stats: "本页已收录 {{count}} 个作品，覆盖个人工具、AI 应用、全栈（含边缘部署）与小程序。",
        exploreProjects: "浏览项目展示",
        skills: {
          frontend: "前端与客户态",
          ai: "AI 与智能化",
          platform: "全栈与边缘平台",
        },
      },
      projects: {
        title: "项目展示",
        view: "查看项目",
        viewSource: "查看源码",
        sourcePending: "GitHub 链接待补充",
      },
      contact: {
        title: "联系方式",
        email: "邮箱",
        github: "GitHub",
        social: "社交媒体",
      },
      footer: {
        rights: "版权所有。",
      },
      controls: {
        themeDark: "🌙",
        themeLight: "☀️",
        langZh: "中文",
        langEn: "English",
        toggleThemeAria: "切换深色/浅色主题",
        toggleLangAria: "切换语言",
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        badge: "🤖 + 🧠 = 🚀",
        title: "Hi, I'm Snow",
        subtitle: "AI is my co-pilot, but I keep the wheel",
        desc: "This site and the projects here are built with human + AI collaboration.",
        avatarAlt: "Snow's avatar",
        visitorCount: "Website visitors",
      },
      about: {
        title: "About",
        lead:
          "Hi, I'm Snow. Most pieces here were built with human + AI collaboration: I own architecture and product trade-offs, use AI to speed up implementation and docs, then ship demos and open repos I can stand behind.",
        detail:
          "I mainly work in React + TypeScript + Vite, and have shipped Vue 3 full-stack tools. On the AI side I've wired up chat, streaming writing, image generation, and speech-to-text against vendor APIs. For full-stack and edge, I deploy Cloudflare Workers + Hono + D1 (and KV) for blog, Q&A, e-commerce, and a GitHub learning assistant. I also built a WeChat mini program for local-first accounting. I care about reusable components, mobile UX, and performance (lazy media, scoped fetching), and about turning complex stacks into simple interfaces.",
        stats: "{{count}} projects are listed here: productivity tools, AI apps, full-stack edge apps, and a mini program.",
        exploreProjects: "Browse projects",
        skills: {
          frontend: "Frontend & client",
          ai: "AI & multimodal",
          platform: "Full-stack & edge",
        },
      },
      projects: {
        title: "Projects",
        view: "View project",
        viewSource: "View source",
        sourcePending: "GitHub link to be added",
      },
      contact: {
        title: "Contact",
        email: "Email",
        github: "GitHub",
        social: "Social",
      },
      footer: {
        rights: "All rights reserved.",
      },
      controls: {
        themeDark: "🌙",
        themeLight: "☀️",
        langZh: "中文",
        langEn: "English",
        toggleThemeAria: "Toggle light/dark theme",
        toggleLangAria: "Switch language",
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // 忽略写入失败
  }
  document.documentElement.lang = lng;
});

export { i18n };
