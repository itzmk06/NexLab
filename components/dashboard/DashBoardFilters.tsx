import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";

export default function DashBoardFilters(){
    const active='newest';
    return(
        <div className="mt-3 hidden flex-wrap gap-3  md:flex">
            {
                HomePageFilters.map((item)=>{
                    return(
                        <Button 
                            key={item?.value} 
                            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none
                                ${active===item?.value? 'bg-blue-100 text-blue-600 dark:bg-blue-500 dark:text-blue-100':'bg-light-800 text-light-500 dark:bg-dark-200 dark:text-light-500'}
                                `}
                    >
                            {item?.name}
                        </Button>
                    )
                })
            }
        </div>
    )
};