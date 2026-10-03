import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ShaderBackground } from "@/components/shader-background";
import { SiteHeader } from "@/components/site-header";
import { NavDots } from "@/components/nav-dots";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const BIO =
  "Jhon Quiceno is a full-stack software engineer who builds end-to-end systems across web, mobile and backend — Java/Spring Boot services, TypeScript front-ends, Flutter mobile apps, and PHP/Laravel platforms — with growing work in data/ML tooling.";

export const metadata: Metadata = {
  title: "Jhon Quiceno — Full-Stack Software Engineer",
  description: BIO,
  openGraph: {
    title: "Jhon Quiceno — Full-Stack Software Engineer",
    description: BIO,
    type: "website",
    siteName: "Jhon Quiceno",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="dot-matrix min-h-screen bg-background font-sans text-body-lg text-on-background selection:bg-primary-container/30">
        <MotionConfig reducedMotion="user">
          <ShaderBackground />
          <SiteHeader />
          <NavDots />
          {children}
          <SiteFooter />
        </MotionConfig>
      </body>
    </html>
  );
}
