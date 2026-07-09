"use client";

type GlobalErrorProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            fontFamily: "system-ui, sans-serif",
            padding: "24px",
          }}
        >
          <section style={{ maxWidth: "560px", textAlign: "center" }}>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Critical Error
            </p>
            <h1>Application shell failed to render.</h1>
            <p>The global error boundary caught a root-level failure.</p>
            <button type="button" onClick={reset}>
              Retry
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}

export default GlobalError;
