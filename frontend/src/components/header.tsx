"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "./ui/button";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center px-[5vw] max-h-20 w-full border-b">
            <Link href={"/"} className="flex items-center cursor-pointer gap-x-3 hover:opacity-80">
                <Image src={"/light-logo.png"} width={100} height={100} alt="Logo" className="block dark:hidden max-sm:w-20" />
                <Image src={"/dark-logo.png"} width={100} height={100} alt="Logo" className="hidden dark:block" />
                <span className="text-2xl font-black max-sm:hidden">Ampu Fitness</span>
            </Link>
            <nav className="flex gap-x-6">
                <ModeToggle />
                {pathname !== "/dashboard" ?
                    <Link href={"/dashboard"} className={buttonVariants({ variant: "secondary" })}>Try demo</Link>
                    : null
                }
            </nav>
        </header>
    )
}

export default Header;