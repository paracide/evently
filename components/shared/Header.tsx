import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import DesktopNav from "@/components/shared/DesktopNav";
import MobileNav from "@/components/shared/MobileNav";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <Image src="/assets/images/logo.svg"
                           alt='Evently Logo' width={128} height={38}/>
                </Link>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <DesktopNav/>
                </nav>

                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                        <MobileNav/>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
};

export default Header;
