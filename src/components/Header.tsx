export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold">
          Snow Portfolio
        </a>
        <div className="flex items-center gap-4 text-sm text-white/80">
          <a href="#about" className="hover:text-white">
            关于我
          </a>
          <a href="#projects" className="hover:text-white">
            项目
          </a>
          <a href="#contact" className="hover:text-white">
            联系
          </a>
        </div>
      </nav>
    </header>
  )
}
