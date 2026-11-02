import { Suspense } from "react";
import MainPage from "./mainpage";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050811]" />}>
      <MainPage />
    </Suspense>
  );
}
