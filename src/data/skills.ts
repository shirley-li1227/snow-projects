// 技能分组：与作品集项目方向对齐，标题文案在 i18n 的 about.skills 中
export type SkillGroupId = 'frontend' | 'ai' | 'platform'

export const skillGroups: { id: SkillGroupId; items: string[] }[] = [
  {
    id: 'frontend',
    items: [
      'React',
      'Vue 3',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Less',
      '微信小程序',
    ],
  },
  {
    id: 'ai',
    items: [
      '智谱 GLM / OpenAI 兼容 API',
      'SSE · 流式输出',
      'ASR · 文生图',
      'react-markdown',
    ],
  },
  {
    id: 'platform',
    items: [
      'Cloudflare Workers',
      'Hono',
      'Express',
      'D1 · SQLite',
      'KV · Cookie 会话',
      'JWT',
      'Wrangler',
    ],
  },
]
