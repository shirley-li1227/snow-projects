export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto w-full max-w-6xl px-4 text-sm text-white/60 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Snow Portfolio. All rights reserved.
      </div>
    </footer>
  )
}
