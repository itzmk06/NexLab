import Link from "next/link";
import { Button } from "@/components/ui/button"
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import DashBoardFilters from "@/components/dashboard/DashBoardFilters";


export default function Home(){
    return(
        <div className="w-full flex-col">
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="text-dark100_light900 text-lg font-semibold max-sm:text-xl">Ask Questions</h1>
                <Link href='/ask-question' className="flex justify-end max-sm:w-full">
                    <Button className="min-h-[36px] bg-blue-500 px-3  !text-zinc-100">Ask a Question</Button>
                </Link>
            </div>
            <div className="mt-3 flex w-full justify-between gap-5 max-sm:flex-col max-sm:items-center">
                <LocalSearch
                    route="/"
                    iconPosition="right"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search for questions"
                    otherClasses="flex-1 w-full"
                />
                <Filter
                    filters={HomePageFilters}
                    otherClasses="min-h-[56px] "
                    containerClasses="hidden max-md:flex w-full"
                />
            </div>
            <div>
                <DashBoardFilters/>
            </div>
        </div>
    )
};