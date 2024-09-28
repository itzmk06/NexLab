"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeProvider";
import { sidebarLinks } from "@/constants/constant";
import { usePathname } from "next/navigation";

const NavContent = () => {
    const pathName = usePathname();
  
    return (
      <section className="flex flex-col gap-2 pt-4">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathName.includes(item.route) && item.route.length > 1) ||
            pathName === item.route;
  
          return (
            <SheetClose asChild key={item.route}>
              <Link
                href={item.route}
                className={`flex items-center justify-start  gap-3 px-2 transition duration-200 ${
                  isActive 
                    ? "rounded-lg bg-blue-600 font-bold text-zinc-200" 
                    : "text-dark300_light900 bg-transparent"
                } ${item.hoverColor}  py-3`}
              >
                <i className={`${item.icon} mt-1 text-xl`} style={{ color: item.color }} />
                <p className="text-xl font-semibold">{item.label}</p>
              </Link>
            </SheetClose>
          );
        })}
      </section>
    );
  };
  

export default function MobileNav() {
  const { mode } = useTheme();
  return (
    <Sheet>
    <SheetTitle>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="menu"
          width={30}
          height={30}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      </SheetTitle>
      <SheetContent className="background-light900_dark200 border-none">
        <SheetHeader>
          <Link
            href="/dashboard"
            className="flex items-center gap-[0.1rem] md:pl-0"
          >
            <Image
              className="w-10 md:w-8"
              src={`${mode === "dark" ? "/assets/nexlab-light.png" : "/assets/nexlab.png"}`}
              width={30}
              height={30}
              alt="NexLab"
            />
            <p className="h1-bold text-dark-100 dark:text-light-900">exLab</p>
          </Link>
        </SheetHeader>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
