/** @type {import('tailwindcss').Config} */
export default {
  // 使用 class 模式，支持用户手动切换主题
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

