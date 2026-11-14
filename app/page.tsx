
import { Suspense } from "react";
import type { Metadata } from "next";
import MainPage from "./mainpage";

export const metadata: Metadata = {
  title: "Shubham Manta | Senior Software Developer",
  description:
    "I'm Shubham Manta, a Senior Software Developer passionate about building scalable web applications, crafting seamless user experiences, and developing modern software solutions.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};


export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0f17]" />}>
      <MainPage />
    </Suspense>
  );
}
