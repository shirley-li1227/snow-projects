import { useEffect } from 'react'

type Provider = 'plausible' | 'umami'

function loadScript(id: string, attrs: Record<string, string>) {
  if (document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v))
  document.head.appendChild(script)
}

function getAnalyticsConfig():
  | { provider: 'plausible'; domain: string; src: string }
  | { provider: 'umami'; websiteId: string; src: string }
  | null {
  const provider = (import.meta.env.VITE_ANALYTICS_PROVIDER as Provider | undefined) ?? undefined

  // Plausible（推荐：无需 cookie、配置简单）
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined
  const plausibleSrc =
    (import.meta.env.VITE_PLAUSIBLE_SCRIPT_SRC as string | undefined) ??
    'https://plausible.io/js/script.js'

  // Umami（可自建/托管）
  const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID as string | undefined
  const umamiSrc = import.meta.env.VITE_UMAMI_SCRIPT_SRC as string | undefined

  if ((provider === 'plausible' || !provider) && plausibleDomain) {
    return { provider: 'plausible', domain: plausibleDomain, src: plausibleSrc }
  }

  if ((provider === 'umami' || !provider) && umamiWebsiteId && umamiSrc) {
    return { provider: 'umami', websiteId: umamiWebsiteId, src: umamiSrc }
  }

  return null
}

export function Analytics() {
  useEffect(() => {
    const cfg = getAnalyticsConfig()
    if (!cfg) return

    if (cfg.provider === 'plausible') {
      loadScript('analytics-plausible', {
        defer: 'true',
        'data-domain': cfg.domain,
        src: cfg.src,
      })
      return
    }

    loadScript('analytics-umami', {
      defer: 'true',
      'data-website-id': cfg.websiteId,
      src: cfg.src,
    })
  }, [])

  return null
}

