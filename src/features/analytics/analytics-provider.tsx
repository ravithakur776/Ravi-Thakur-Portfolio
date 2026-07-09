"use client";

import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import type { ReactNode } from "react";

import { publicEnv } from "@/lib/env/public";

type AnalyticsProviderProps = Readonly<{
  children: ReactNode;
}>;

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const measurementId = publicEnv.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {children}
      <Analytics />
      {measurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
