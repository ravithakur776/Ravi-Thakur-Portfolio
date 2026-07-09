import { siteConfig } from "@/config/site";

const themeScript = `
(() => {
  try {
    const preference = window.localStorage.getItem("ravi-theme") || "system";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = preference === "system" ? systemTheme : preference;
    const resolvedTheme = theme === "light" || theme === "dark" ? theme : "${siteConfig.defaultTheme}";
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
  } catch {
    document.documentElement.classList.add("${siteConfig.defaultTheme}");
    document.documentElement.dataset.theme = "${siteConfig.defaultTheme}";
    document.documentElement.style.colorScheme = "${siteConfig.defaultTheme}";
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
