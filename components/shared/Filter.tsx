"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { SelectGroup } from "@radix-ui/react-select"
  
interface Props{
    filters:{
        name:string,
        value:string
    }[],
    otherClasses?:string,
    containerClasses?:string
}


export default function Filter({filters,otherClasses,containerClasses}:Props){
    return(
        <div className={`relative ${containerClasses} mt-1 `}>
            <Select>
                <SelectTrigger className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}>
                <div className="line-clamp-1 flex-1 text-left">
                    <SelectValue placeholder="select a filter" />
                </div>
                </SelectTrigger>
                <SelectContent className="border-none">
                    <SelectGroup >
                        {
                            filters.map((item)=>{
                                return <SelectItem className="text-dark500_light700" value={item?.value} key={item?.value}>
                                    {item?.name}
                                </SelectItem>
                            })
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>
    )
};