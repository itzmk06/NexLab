"use client";
import { SignedIn,UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image"
import Theme from "./Theme";
import { useTheme } from "@/context/ThemeProvider";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

export default function Navbar(){
    const {mode}=useTheme();
    return(
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full  gap-5  p-2 shadow-light-300 dark:shadow-none sm:px-12 md:px-6 ">
        <Link href='/dashboard' className="flex items-center gap-[0.1rem] md:pl-0">
            <Image className="w-8 md:w-8"
            src={`${mode==='dark'?'/assets/nexlab-light.png':'/assets/nexlab.png'}`}
            width={25}
            height={25}
            alt='NexLab'
            />
            <p className="h2-bold text-dark-100 dark:text-light-900 max-sm:hidden">exLab</p>
        </Link>
        <div className="hidden w-4/5   md:block">
        <GlobalSearch/>
        </div>
        <div className="flex-between gap-5">
            <div className="-mr-3">
                <Theme/>
            </div>
            <SignedIn>
                <UserButton
                    appearance={{
                        elements:{
                            avatarBox:'h-9 w-9'
                        },
                        variables:{
                            colorPrimary:'#ff7000'
                        }
                    }}
                />
            </SignedIn>
        <MobileNav/>
        </div>

    </nav>
    )
};