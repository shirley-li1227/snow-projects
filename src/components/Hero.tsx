import { useEffect, useState } from 'react'
import avatarImage from '../assets/avatar.jpg'
import { useTranslation } from 'react-i18next'

// 访问统计相关常量
const VISITOR_STORAGE_KEY = 'snow_website_visitors'

// 获取客户端 IP 地址
async function getClientIP(): Promise<string | null> {
  try {
    // 使用免费的 ipapi.co 服务
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip || null
  } catch (error) {
    console.error('Failed to get client IP:', error)
    return null
  }
}

// 记录访问者 IP
function recordVisitor(ip: string): number {
  try {
    // 从 localStorage 获取已访问的 IP 列表
    const visitors = JSON.parse(localStorage.getItem(VISITOR_STORAGE_KEY) || '[]') as string[]
    
    // 如果该 IP 未访问过，添加到列表
    if (!visitors.includes(ip)) {
      visitors.push(ip)
      localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(visitors))
    }
    
    // 返回去重后的访问人数
    return visitors.length
  } catch (error) {
    console.error('Failed to record visitor:', error)
    return 0
  }
}

// 获取访问人数
function getVisitorCount(): number {
  try {
    const visitors = JSON.parse(localStorage.getItem(VISITOR_STORAGE_KEY) || '[]') as string[]
    return visitors.length
  } catch (error) {
    console.error('Failed to get visitor count:', error)
    return 0
  }
}

export function Hero() {
  const { t } = useTranslation()
  const [visitorCount, setVisitorCount] = useState<number>(() => getVisitorCount())

  useEffect(() => {
    // 获取并记录当前访客 IP
    getClientIP().then((ip) => {
      if (ip) {
        const newCount = recordVisitor(ip)
        setVisitorCount(newCount)
      }
    })
  }, [])

  return (
    <section id="home" className="py-16 sm:py-20">
      <div className="grid items-center gap-8 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-fuchsia-500/10 via-[var(--card)] to-cyan-400/10 p-8 sm:grid-cols-[1fr_auto] sm:p-12">
        <div>
          <p className="mb-4 inline-block rounded-full bg-gradient-to-r from-fuchsia-500/25 to-cyan-400/25 px-4 py-1 text-sm text-[var(--fg)]/90">
            {t('hero.badge')}
          </p>
          <h1 className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] sm:text-3xl">
            {t('hero.subtitle')}
          </p>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
            {t('hero.desc')}
          </p>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
            {t('hero.visitorCount')}：<span className="font-bold text-cyan-400">{visitorCount}</span>
          </p>
        </div>

        <div className="justify-self-start sm:justify-self-end">
          <div className="rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 p-[3px] shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            <img
              src={avatarImage}
              alt={t('hero.avatarAlt')}
              loading="lazy"
              className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
