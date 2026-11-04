import { Suspense } from "react";
import MainPage from "./mainpage";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0f17]" />}>
      <MainPage />
    </Suspense>
  );
}
