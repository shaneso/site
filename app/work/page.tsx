import Link from "next/link";

export default function Work() {
  return (
    <div className="sm:flex min-h-screen justify-center font-[font-family:--font-inter] bg-[#faf9f7] dark:bg-zinc-900 text-[#7d7c7b] dark:text-zinc-300">
      {/* nav bar */}
      <nav className="flex sm:min-h-screen max-w-lg sm:flex-col items-start py-7 px-8 sm:py-28 sm:px-16 leading-loose gap-8 sm:gap-0 text-lg sm:text-base">
        <Link href="/">about</Link>
        <Link href="/work" className="text-zinc-900 dark:text-white">work</Link>
        <Link href="/writing">writing</Link>
      </nav>
      {/* content */}
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-start justify-between py-7 px-8 sm:py-28 sm:px-16">
        <div className="flex flex-col items-start gap-8 text-left w-full max-w-full text-base tracking-tight leading-loose text-lg sm:text-base">
          <p>
            I'm developing a new system for orchestrating multi-agent UAV autonomy at the {" "}
            <a href="https://www.sfu.ca/fas/computing/research/labs/airob-lab.html" target="_blank" className="underline decoration-dotted underline-offset-4">Autonomous Intelligence and Robotics (AIROB) Laboratory</a>
            .
            I'm also working on an MPC architecture for TVC and trajectory optimization at{" "}
            <a href="https://www.sfurocketry.com" target="_blank" className="underline decoration-dotted underline-offset-4">SFU Rocketry</a>
            .
          </p>
          <p>
            Currently, I'm building Prism 01, a{" "}
            <a href="https://www.mybeckman.ca/resources/technologies/laser-diffraction" target="_blank" className="underline decoration-dotted underline-offset-4">photonic diffractometer</a>
            {" "}for analyzing optical quantum computing materials.
            It will be used for analyzing the periodicity and structure of metasurfaces, nanopillars, colloidal crystals, diffraction gratings, and plasma-deposited multilayers.
            More news coming soon on the prototype.
          </p>
          <p>
            Previously, I engineered a SoTA control system at{" "}
            <a href="https://nrc.canada.ca/en" target="_blank" className="underline decoration-dotted underline-offset-4">National Research Council Canada</a>
            {" "}for geochemical sensing, which is the first of its kind in the country.
          </p>
          <p>
            I also visited the{" "}
            <a href="https://www.ampel.ubc.ca" target="_blank" className="underline decoration-dotted underline-offset-4">Advanced Materials Process Engineering Laboratory</a>
            {" "}at{" "}
            <a href="https://www.ubc.ca" target="_blank" className="underline decoration-dotted underline-offset-4">UBC</a>
            {" "}to do some optical emission spectroscopy research.
          </p>
          <p>
            A recent project I built is{" "}
            <a href="https://github.com/shaneso/lux" target="_blank" className="underline decoration-dotted underline-offset-4">Lux</a>
            , a biomedical compute engine for analyzing tumor growth, intratumoral heterogeneity, and T-cell response rates.
            Before that, I programmed{" "}
            <a href="https://github.com/shaneso/omni" target="_blank" className="underline decoration-dotted underline-offset-4">Omni</a>
            {" "} to help track health records and make patient data secure.
          </p>
        </div>
      </main>
    </div>
  );
}
