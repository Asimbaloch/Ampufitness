import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people, words } from "@/lib/constants";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full pt-10">
        <div className="flex flex-col items-center justify-center h-[20rem]">
          <p className="text-xl italic font-medium text-neutral-600 dark:text-neutral-200 sm:text-2xl">
            "The road to a better world"
          </p>
          <TypewriterEffectSmooth words={words} />
          <Link className={buttonVariants({ variant: "ghost" })} href={"/login"}>Start now</Link>
        </div>
        <Image src={"/hero.png"} width={630} height={500} alt="Hero" className="rounded-lg" />
        <div className="flex flex-row items-center justify-center w-full mt-16 mb-10">
          <AnimatedTooltip items={people} />
        </div>
      </main>
    </>
  );
}
