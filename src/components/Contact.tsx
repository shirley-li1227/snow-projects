export function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-14">
      <h2 className="text-2xl font-semibold sm:text-3xl">联系方式</h2>
      <div className="mt-6 grid gap-4 text-sm text-white/85 sm:grid-cols-3">
        <a
          href="mailto:moningmo@163.com"
          className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
        >
          邮箱：moningmo@163.com
        </a>
        <a
          href="https://github.com/shirley-li1227"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
        >
          GitHub：@snow
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
        >
          微信：moninglxy
        </a>
      </div>
    </section>
  )
}
