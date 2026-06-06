import Link from "next/link";
import Image from "next/image";
import { containerClass } from "@/src/lib/utils";

export const Navbar = () => {
    return (
        <nav className="shadow-md sticky top-0 bg-white">
            <div className={`${containerClass} flex justify-between items-center`}>
                <Link href="/">
                    <Image src="/next.svg" alt="Logo" width={100} height={100} />
                </Link>
                <Link href="/#about">About</Link>
                <Link href="/#education">Education</Link>
                <Link href="/#experience">Experience</Link>
                <Link href="/#projects">Projects</Link>
                <Link href="/#contact">Contact</Link>
            </div>
        </nav>
    );
}