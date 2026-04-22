import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold">
          Snow Portfolio
        </a>
        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <a href="#about" className="hover:text-[var(--fg)]">
            {t("nav.about")}
          </a>
          <a href="#projects" className="hover:text-[var(--fg)]">
            {t("nav.projects")}
          </a>
          <a href="#contact" className="hover:text-[var(--fg)]">
            {t("nav.contact")}
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-1 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--muted)] transition-all duration-200 hover:scale-110 hover:text-[var(--fg)] hover:shadow-lg"
            aria-label={t("controls.toggleThemeAria")}
          >
            {theme === "dark"
              ? t("controls.themeLight")
              : t("controls.themeDark")}
          </button>
        </div>
      </nav>
    </header>
  );
}
