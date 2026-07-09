import type { NextWebVitalsMetric } from "next/app";

export function reportWebVital(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  console.info({
    level: "info",
    message: "web-vital",
    metric,
    timestamp: new Date().toISOString(),
  });
}
