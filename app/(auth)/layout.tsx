import React from "react"
export default function Layout({children}:{children:React.ReactNode}){
    return(
        <main className="flex min-h-full w-full items-center justify-center">
            {children}
        </main>
    )

};