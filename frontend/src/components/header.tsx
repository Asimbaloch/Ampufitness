import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-[5vw] max-h-20 w-full border-b">
            <div className="flex items-center cursor-pointer gap-x-3 hover:opacity-80">
                <Image src={"/light-logo.png"} width={100} height={100} alt="Logo" className="block dark:hidden max-sm:w-20" />
                <Image src={"/dark-logo.png"} width={100} height={100} alt="Logo" className="hidden dark:block" />
                <span className="text-2xl font-black max-sm:hidden">Ampu Fitness</span>
            </div>
            <nav className="flex gap-x-6">
                <ModeToggle />
                <Link href={"/app"} className={buttonVariants({ variant: "outline" })}>Try demo</Link>
            </nav>
        </header>
    )
}

export default Header;