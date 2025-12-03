import { Geist, Geist_Mono } from "next/font/google";
import TodoApp from "@/components/TodoApp";

// Google 폰트 설정 (Geist)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      // 페이지 전체 배경/폰트 적용
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900`}
    >
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-12">
        {/* 페이지 상단 헤더 영역 */}
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500">
            Next.js + Tailwind
          </p>
          <h1 className="mt-2 text-4xl font-bold leading-tight">나의 Todo 리스트</h1>
          <p className="mt-2 text-slate-600">
            해야 할 일을 추가하고 완료 상태를 관리해보세요.
          </p>
        </header>

        {/* 실제 Todo 기능을 담당하는 컴포넌트 */}
        <TodoApp />
      </main>
    </div>
  );
}
