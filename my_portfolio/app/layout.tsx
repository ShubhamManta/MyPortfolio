import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Shubham Manta | Senior Full-Stack & Systems Engineer",
  description:
    "Portfolio of Shubham Manta - Senior Full-Stack & Systems Engineer with 8+ years of experience in distributed backends, Next.js, WebSockets, and high-concurrency systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-black">
        <Suspense fallback={<div className="min-h-screen bg-[#050811]" />}>
          <StoreProvider>{children}</StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
