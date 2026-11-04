import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Shubham Manta | Software Engineer",
  description:
    "Portfolio of Shubham Manta - Software Engineer specializing in building scalable solutions with clean code, modern frontend frameworks, distributed backends, and high-performance web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-amber-500 selection:text-black">
        <Suspense fallback={<div className="min-h-screen bg-[#0b0f17]" />}>
          <StoreProvider>{children}</StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
