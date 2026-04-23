export type Project = {
  name: string;
  category: "个人工具" | "AI应用" | "全栈应用" | "小程序";
  image: string;
  description: string;
  techStack: string[];
  link: string;
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
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    description: "支持任务分类、进度追踪与状态筛选的前端应用。",
    techStack: ["React", "TypeScript", "Framer Motion"],
    link: "https://todo-list-xi-topaz.vercel.app/",
  },
  {
    name: "Markdown 笔记应用",
    category: "个人工具",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    description:
      "一个基于 React + TypeScript + Vite 构建的 Markdown 笔记应用，支持笔记管理、实时预览和代码高亮，适合学习记录、技术文档草稿和日常笔记整理。",
    techStack: ["React", "TypeScript", "Vite", "Markdown"],
    link: "https://markdown-note-nu.vercel.app/",
  },
  {
    name: "番茄钟应用",
    category: "个人工具",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    description: "一个基于 React + TypeScript + Vite 的番茄钟应用。",
    techStack: ["React", "TypeScript", "Vite"],
    link: "https://pomodoro-iota-lovat.vercel.app/",
  },
  {
    name: "移动端天气应用",
    category: "个人工具",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    description:
      "一个基于 React + TypeScript + Vite 的移动端风格天气应用，支持城市查询、定位天气、未来 5 天趋势和收藏城市快捷查询。天气数据：OpenWeatherMap API。",
    techStack: ["React", "TypeScript", "Vite", "OpenWeatherMap API"],
    link: "https://weather-one-smoky.vercel.app/",
  },
  {
    name: "AI聊天助手",
    category: "AI应用",
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
    link: "https://ai-chat-teal-two.vercel.app/",
  },
];
