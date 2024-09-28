import { SignedIn,UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image"

export default function Navbar(){
    return(
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full  gap-5 p-2 shadow-light-300 dark:shadow-none sm:px-12">
        <Link href='/dashboard' className="flex items-center  md:pl-0">
            <Image className="w-7 md:w-8"
            src="/assets/nexlab.png"
            width={32}
            height={32}
            alt='NexLab'
            />
            <p className="h2-bold text-dark-100 dark:text-light-900 max-sm:hidden">exLab</p>
        </Link>
        GlobalSearch
        <div className="flex-between gap-3">
            Theme
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
        </div>
    </nav>
    )
};