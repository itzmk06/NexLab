import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <main className=" relative">
            <Navbar />
            <div className="flex">
                leftsidebar
                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl ">
                        {children}
                    </div>
                </section>
                rightSideBar
            </div>
            toaster
        </main>

    )
};