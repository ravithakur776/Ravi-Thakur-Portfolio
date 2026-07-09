"use client";

import { RotateCcw } from "lucide-react";
import { useEffect } from "react";

import { IconButton } from "@/components/ui/icon-button";
import { reportClientError } from "@/lib/observability/client-logger";

type ErrorPageProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    reportClientError("Route error boundary captured an error.", {
      digest: error.digest,
      message: error.message,
    });
  }, [error]);

  return (
    <section
      className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center py-24"
      aria-labelledby="route-error-title"
    >
      <div className="max-w-xl text-center">
        <p className="text-muted-foreground font-mono text-xs tracking-[0.08em] uppercase">
          Recoverable Error
        </p>
        <h1
          id="route-error-title"
          className="mt-4 text-3xl font-semibold tracking-normal"
        >
          Something interrupted this route.
        </h1>
        <p className="text-muted-foreground mt-4 text-base leading-7">
          The platform shell stayed mounted. Try the route again, or continue navigating.
        </p>
        <div className="mt-6 flex justify-center">
          <IconButton
            aria-label="Retry route"
            icon={<RotateCcw aria-hidden="true" className="size-4" />}
            onClick={reset}
          />
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
