export type Project = {
  name: string;
  category: "个人工具" | "AI应用" | "全栈应用" | "小程序";
  version: string;
  image: string;
  description: string;
  techStack: string[];
  link: string;
  /** GitHub 仓库地址，新标签页打开；未配置时不展示可点击的「查看源码」 */
  sourceLink?: string;
};

// 项目列表数据，后续可以直接在这里扩展作品
export const projects: Project[] = [
  // {
  //   name: "作品集",
  //   image:
  //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  //   description: "用于展示个人项目、技能与联系方式的响应式网站。",
  //   techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  //   link: "https://snow-projects-blue.vercel.app/",
  // },
  {
    name: "任务管理应用",
    category: "个人工具",
    version: "v1.0.1",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    description: "支持任务分类、进度追踪与状态筛选的前端应用。",
    techStack: ["React", "TypeScript", "Framer Motion"],
    link: "https://todo-list-afm.pages.dev/",
    sourceLink: "https://github.com/shirley-li1227/todo-list",
  },
  {
    name: "Markdown 笔记应用",
    category: "个人工具",
    version: "v1.0.1",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    description:
      "一个基于 React + TypeScript + Vite 构建的 Markdown 笔记应用，支持笔记管理、实时预览和代码高亮，适合学习记录、技术文档草稿和日常笔记整理。",
    techStack: ["React", "TypeScript", "Vite", "Markdown"],
    link: "https://markdown-note-8lo.pages.dev/",
    sourceLink: "https://github.com/shirley-li1227/markdown-note",
  },
  {
    name: "番茄钟应用",
    category: "个人工具",
    version: "v1.0.1",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    description: "一个基于 React + TypeScript + Vite 的番茄钟应用。",
    techStack: ["React", "TypeScript", "Vite"],
    link: "https://pomodoro-b5a.pages.dev/",
    sourceLink: "https://github.com/shirley-li1227/pomodoro",
  },
  {
    name: "移动端天气应用",
    category: "个人工具",
    version: "v1.0.1",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    description:
      "一个基于 React + TypeScript + Vite 的移动端风格天气应用，支持城市查询、定位天气、未来 5 天趋势和收藏城市快捷查询。天气数据：OpenWeatherMap API。",
    techStack: ["React", "TypeScript", "Vite", "OpenWeatherMap API"],
    link: "https://weather-7u1.pages.dev/",
    sourceLink: "https://github.com/shirley-li1227/weather",
  },
  {
    name: "AI聊天助手",
    category: "AI应用",
    version: "v1.0.1",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    description:
      "一个 AI 聊天助手，使用 React + TypeScript + Vite 作为前端框架，Tailwind CSS 编写样式。通过调用大模型 API 实现智能对话，对话历史使用 LocalStorage 保存，并使用 react-markdown 渲染 AI 回复内容。",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "LLM API",
      "LocalStorage",
      "react-markdown",
    ],
    link: "https://ai-chat-6bd.pages.dev/",
    sourceLink: "https://github.com/shirley-li1227/ai-chat",
  },
  {
    name: "智能写作应用",
    category: "AI应用",
    version: "v1.0.1",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    description:
      "一个基于 React + TypeScript + Express 的智能写作应用，提供 6 种写作模式、流式生成、Markdown/GFM 渲染、历史记录管理与一键复制，支持 temperature 与 max_tokens 高级参数调节。",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "react-markdown",
      "remark-gfm",
      "Express",
      "CORS",
      "dotenv",
      "concurrently",
      "LocalStorage",
      "智谱 AI API",
    ],
    link: "https://writing-assistant-b5z.pages.dev/",
    sourceLink: "https://github.com/shirley-li1227/writing-assistant",
  },
  
  {
    name: "AI 图片生成器",
    category: "AI应用",
    version: "v1.0.1",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80",
    description:
      "一个基于 React + TypeScript + Vite + Tailwind CSS 的 AI 图片生成应用，支持智谱 AI 文生图、提示词优化、瀑布流历史记录、详情弹窗与图片下载。",
    techStack: [
      "React 18",
      "TypeScript",
      "Vite 5",
      "Tailwind CSS",
      "LocalStorage",
      "智谱 AI API",
      "chat/completions",
      "images/generations",
    ],
    link: "https://image-generator-ceq.pages.dev/",
    sourceLink: "https://github.com/shirley-li1227/image-generator",
  },
  {
    name: "语音识别助手",
    category: "AI应用",
    version: "v1.0.1",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    description:
      "一个基于 React + TypeScript 的中文语音转写应用，支持浏览器录音、智谱 ASR 自动识别、可编辑结果和历史会话管理。",
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "LocalStorage",
      "智谱 AI（GLM-ASR-2512）",
    ],
    link: "https://speech-recognition-1ca.pages.dev/",
    sourceLink: "https://github.com/shirley-li1227/speech-recognition",
  },
  {
    name: "个人技术博客",
    category: "全栈应用",
    version: "v1.0.0",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    description:
      "个人博客全栈应用：React + Vite 前端与 Express API；本地使用 SQLite（better-sqlite3），线上运行在 Cloudflare Workers + D1。支持用户注册与登录（JWT）、个人中心，以及文章的发布/编辑/删除、草稿与正式发布、列表分页、分类与关键词、浏览量，以及点赞与收藏。",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router",
      "Axios",
      "react-markdown",
      "Express 5",
      "JWT",
      "bcryptjs",
      "SQLite",
      "Cloudflare Workers",
      "D1",
    ],
    link: "https://personal-blog.moningmo.workers.dev/",
    sourceLink: "https://github.com/shirley-li1227/personal-blog",
  },
  {
    name: "QA 社区",
    category: "全栈应用",
    version: "v1.0.0",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    description:
      "轻量问答社区：支持提问与回答（Markdown）、点赞、采纳最佳答案、标签筛选与积分体系。本地开发为 React 前端 + Express，数据通过 sql.js 持久化 SQLite（语法与 Cloudflare D1 兼容）；生产环境由单个 Cloudflare Worker 托管静态站点与 `/api/*` API（`cf-worker/` + Hono + D1）。含注册登录与 JWT、问题列表（最新/热门/未解决）、「我的问题」、积分规则（发布/回答/获赞/采纳及取消点赞回退）等。",
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "react-markdown",
      "Express",
      "JWT",
      "bcryptjs",
      "sql.js",
      "SQLite",
      "Cloudflare Workers",
      "Hono",
      "D1",
      "jsonwebtoken",
    ],
    link: "https://qa-community.moningmo.workers.dev/",
    sourceLink: "https://github.com/shirley-li1227/QA-community",
  },
  {
    name: "project-helper（项目学习助手）",
    category: "全栈应用",
    version: "v1.0.0",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    description:
      "基于 GitHub 仓库地址在线拉取目录与关键源码（不克隆到本地），通过 GitHub REST API + 智谱 GLM（OpenAI 兼容接口）生成通俗中文报告；支持 SSE 实时进度、D1/KV 数据缓存，以及基于仓库内容的智能问答与流式回答。",
    techStack: [
      "Vue 3",
      "Vite",
      "TypeScript",
      "marked",
      "highlight.js",
      "Cloudflare Workers",
      "Hono",
      "Cloudflare D1",
      "Cloudflare KV",
      "Wrangler CLI",
      "GitHub REST API",
      "智谱 GLM",
      "SSE",
    ],
    link: "https://project-helper.moningmo.workers.dev/",
    sourceLink: "https://github.com/shirley-li1227/project-helper",
  },
  {
    name: "online-mall（Mini 在线商城）",
    category: "全栈应用",
    version: "v1.0.0",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    description:
      "Mini 在线商城示例：前后端同域部署，Cloudflare Worker 同时托管静态资源与 `/api`。后端基于 Hono + D1（SQLite 兼容），会话使用 KV + HttpOnly Cookie，实现轻量但完整的电商闭环。",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Hono",
      "Cloudflare D1",
      "Cloudflare KV",
      "HttpOnly Cookie",
      "Wrangler CLI",
    ],
    link: "https://online-mall.moningmo.workers.dev/",
    sourceLink: "https://github.com/shirley-li1227/online-mall",
  },
  {
    name: "记账小程序（accounting-miniapp）",
    category: "小程序",
    version: "v1.0.0",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    description:
      "基于微信原生小程序的个人记账应用（无第三方 UI 框架），收支数据用 `wx.setStorageSync` / `wx.getStorageSync` 本地持久化。首页展示本月收入、支出与结余，账单按今天、昨天、更早分组，支持本月/全部/按日筛选、下拉刷新、点击进入编辑、左滑删除与快捷添加；「记一笔」支持收入/支出切换及金额、分类、备注与日期；独立「收支统计」页展示当前自然月的按日柱状图，以及支出与收入分类占比（环形图 + 图例）。图表使用 `canvas` type=\"2d\" 自绘。",
    techStack: [
      "微信小程序原生",
      "TypeScript",
      "Less",
      "wx.setStorageSync",
      "wx.getStorageSync",
      "Canvas 2D",
    ],
    link: "#",
    sourceLink: "https://github.com/shirley-li1227/accounting-miniapp",
  },
];
