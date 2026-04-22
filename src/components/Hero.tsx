import avatarImage from '../assets/avatar.jpg'

export function Hero() {
  return (
    <section id="home" className="py-16 sm:py-20">
      <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-cyan-400/5 p-8 sm:grid-cols-[1fr_auto] sm:p-12">
        <div>
          <p className="mb-4 inline-block rounded-full bg-gradient-to-r from-fuchsia-500/25 to-cyan-400/25 px-4 py-1 text-sm text-white/90">
            🤖 + 🧠 = 🚀
          </p>
          <h1 className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl">
            你好，这里是 Snow 的作品集
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-3xl">
            我的编程副驾是 AI，方向盘还在我手上
          </p>
          <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            这个网站 + 里面所有项目 = 人机协作的产物
          </p>

        </div>

        <div className="justify-self-start sm:justify-self-end">
          <div className="rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 p-[3px] shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            <img
              src={avatarImage}
              alt="Snow 的头像"
              loading="lazy"
              className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
