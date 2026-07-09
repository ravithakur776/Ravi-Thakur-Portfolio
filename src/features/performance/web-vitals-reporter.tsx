"use client";

import { useReportWebVitals } from "next/web-vitals";

import { reportWebVital } from "@/lib/observability/web-vitals";

export function WebVitalsReporter() {
  useReportWebVitals(reportWebVital);

  return null;
}
