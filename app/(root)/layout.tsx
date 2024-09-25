import { UserButton } from "@clerk/nextjs"
import React from "react"
export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div>
            <header>
                <UserButton/>
            </header>
            {children}
        </div>
    )
};