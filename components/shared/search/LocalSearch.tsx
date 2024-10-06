"use client"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface homeProps{
    route:string,
    iconPosition:string,
    imgSrc:string,
    placeholder:string,
    otherClasses?:string
}

export default function LocalSearch({
    route,
    iconPosition,
    imgSrc,
    placeholder,
    otherClasses,
}:homeProps){
    return(
        <div className={`background-light700_dark400 flex min-h-[50px] grow items-center gap-4 rounded-lg px-4 ${otherClasses}`}>
            {
                iconPosition==="left"&&(
                    <Image
                    src={imgSrc}
                    width={24}
                    height={24}
                    alt={"search icon"}
                    className="cursor-pointer"
                    />
                )
            }
            <Input
                type="text"
                placeholder={placeholder}
                // value=""
                // onChange={()=>{}}
                className="paragraph-regular no-focus  text-dark400_light700 border-none bg-transparent shadow-none outline-none"
            />
                        {
                iconPosition==="right"&&(
                    <Image
                    src={imgSrc}
                    width={24}
                    height={24}
                    alt={"search icon"}
                    className="cursor-pointer"
                    />
                )
            }
        </div>
    )
};