import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:flex min-h-screen justify-center font-[font-family:--font-inter] bg-[#faf9f7] dark:bg-zinc-900 text-[#7d7c7b] dark:text-zinc-300">
      {/* nav bar */}
      <nav className="flex sm:min-h-screen max-w-lg sm:flex-col items-start py-7 px-8 sm:py-28 sm:px-16 leading-loose gap-8 sm:gap-0 text-lg sm:text-base">
        <Link href="/">about</Link>
        <Link href="/work">work</Link>
        <Link href="/writing" className="text-zinc-900 dark:text-white">writing</Link>
      </nav>
      {/* content */}
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-start justify-between py-7 px-8 sm:py-28 sm:px-16">
        <div className="flex flex-col items-start gap-8 text-left w-full max-w-full text-base tracking-tight leading-loose text-lg sm:text-base">
          {children}
        </div>
        <Link href="/writing" className="mt-30 block mx-auto">[ return ]</Link>
      </main>
    </div>
  );
}
