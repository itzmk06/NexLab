import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface props{
    link:string,
    description:string,
    title:string,
    linkTitle:string
}

export default function NoResults({link,description,title,linkTitle}:props){
    return(
        <div className="mt-3 flex w-full flex-col items-center justify-center">
            <Image
                src="/assets/images/light-illustration.png"
                alt="No result illustration"
                width={300}
                height={300}
                className="block  object-contain dark:hidden"
            />
            <Image
                src="/assets/images/dark-illustration.png"
                alt="No result illustration"
                width={300}
                height={300}
                className="hidden  object-contain dark:flex"
            />
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-dark200_light900 mt-3 text-lg  font-semibold ">{title}</h2>
                <p className="body-regular text-dark500_light700 my-2 max-w-md text-center">{description}</p>
                <Link href={link}>
                    <Button className="paragraph-medium min-h-[35px] rounded-lg bg-blue-500 px-4 py-3 text-light-900">{linkTitle}</Button>
                </Link>
            </div>

        </div>
    )
};