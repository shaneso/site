import Link from "next/link";

export default function Home() {
  return (
    <div className="sm:flex min-h-screen justify-center font-[font-family:--font-inter] bg-[#faf9f7] dark:bg-zinc-900 text-[#7d7c7b] dark:text-zinc-300">
      {/* nav bar */}
      <nav className="flex sm:min-h-screen max-w-lg sm:flex-col items-start py-7 px-8 sm:py-28 sm:px-16 leading-loose gap-8 sm:gap-0 text-lg sm:text-base">
        <Link href="/" className="text-zinc-900 dark:text-white">about</Link>
        {/* <Link href="/work">work</Link> */}
        <Link href="/writing">writing</Link>
      </nav>
      {/* content */}
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-start justify-between py-7 px-8 sm:py-28 sm:px-16">
        <div className="flex flex-col items-start gap-8 text-left w-full max-w-full text-base tracking-tight leading-loose text-lg sm:text-base">
          <p>
            I enjoy building intelligent machines—from silicon, circuits, and actuators to the math, algorithms, and software that power them.
            I'm currently studying computer science and mathematics at{" "}
            <a href="https://www.sfu.ca" target="_blank" className="underline decoration-dotted underline-offset-4">Simon Fraser University</a>
            .
          </p>
          <p>
            Right now, I'm co-leading a new drone swarm research initiative at the{" "}
            <a href="https://airob-group.github.io/" target="_blank" className="underline decoration-dotted underline-offset-4">Autonomous Intelligence and Robotics (AIRob) Lab</a>
            .
            I'm also developing trajectory optimization and thrust vector control software at{" "}
            <a href="https://www.sfurocketry.com" target="_blank" className="underline decoration-dotted underline-offset-4">Simon Fraser University Rocketry</a>
            .
          </p>
          <p>
            Find me on{" "}
            <a href="https://www.linkedin.com/in/shaneso" target="_blank" className="underline decoration-dotted underline-offset-4">LinkedIn</a>
            ,{" "}
            <a href="https://x.com/shanehso" target="_blank" className="underline decoration-dotted underline-offset-4">X</a>
            ,{" "}
            <a href="https://github.com/shaneso" target="_blank" className="underline decoration-dotted underline-offset-4">GitHub</a>
            ,{" "}or contact me by{" "}
            <a href="mailto:shane_liam_so@sfu.ca" target="_blank" className="underline decoration-dotted underline-offset-4">email</a>
            .
            To learn more about my work, please see my{" "}
            <a href="/shane_so_resume.pdf" target="_blank" className="underline decoration-dotted underline-offset-4">resume</a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
