import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { AppProviders } from "@/components/providers/app-providers";
import { ThemeScript } from "@/features/theme/theme-script";
import { createPersonJsonLd, createWebsiteJsonLd, JsonLd } from "@/lib/seo/json-ld";
import { defaultMetadata, defaultViewport } from "@/lib/seo/metadata";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

const structuredData = [createPersonJsonLd(), createWebsiteJsonLd()];

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeScript />
        {structuredData.map((data) => (
          <JsonLd key={String(data["@type"])} data={data} />
        ))}
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
