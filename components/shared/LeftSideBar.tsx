"use client"
import { sidebarLinks } from "@/constants/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSideBar(){
    const pathName = usePathname();
    return(
        <section className="background-light900_dark200 light-border  custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r px-6 pt-20 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[250px]">
        <div className="flex flex-1 flex-col gap-3">
                {sidebarLinks.map((item) => {
                const isActive =
                    (pathName.includes(item.route) && item.route.length > 1) ||
                    pathName === item.route;
        
                return (
                    <Link key={item.route}
                        href={item.route}
                        className={`flex items-center justify-start  gap-3 px-2 transition duration-200 md:gap-2 ${
                        isActive 
                            ? "rounded-lg bg-blue-600 font-bold text-zinc-200" 
                            : "text-dark300_light900 bg-transparent"
                        } ${item.hoverColor}  py-3 md:py-[0.2rem]`}
                    >
                        <i className={`${item.icon} mt-1 text-xl md:text-lg`} style={{ color: item.color }} />
                        <p className="text-xl font-semibold max-lg:hidden md:text-base">{item.label}</p>
                    </Link>
                );
                })}
            </div>
        </section>

    )
};