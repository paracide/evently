'use client'
import React from 'react';
import {headerLinks} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavItems = () => {
    const pathname = usePathname();

    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {
                headerLinks.map(v => {
                    const isActive = v.route === pathname;
                    return (
                        <li key={v.route} className={`${isActive && 'text-primary-500'} 
                        flex-center p-medium-16 whitespace-nowrap`}>
                            <Link href={v.route}>
                                {v.label}
                            </Link>
                        </li>)
                })
            }
        </ul>
    );
};

export default NavItems;
