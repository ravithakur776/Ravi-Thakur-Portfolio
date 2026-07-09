export function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background sr-only z-50 rounded-md px-4 py-3 text-sm font-medium shadow-lg focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
