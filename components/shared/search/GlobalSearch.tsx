import Image from 'next/image'
import { Input } from "@/components/ui/input"

export default function GlobalSearch(){

    return (
        <div className="relative mx-auto w-full max-w-[700px] max-lg:hidden" >
          <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
            <Image 
              src="/assets/icons/search.svg"
              alt="search"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Input
              type="text"
              placeholder="Search for projects, developers and more"
              className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
            />
          </div>
        </div>
      )

}