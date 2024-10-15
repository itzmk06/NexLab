import Image from "next/image";
import Link from "next/link";

interface Props{
    imgUrl:string,
    alt:string,
    value:string|number,
    title:string,
    href?:string,
    textStyles?:string,
    isAuthor?:boolean,
}

export default function Metric({imgUrl,alt,value,title,href,textStyles,isAuthor}:Props){
    const MetricContent=(
        <>
            <Image 
                src={imgUrl}
                width={16}
                height={16}
                alt={alt}
                className={`object-contain ${href?"rounded-full":""}`}
            />
            <p className={`${textStyles} flex items-center gap-1`}>
                {value}
            <span className={`small-regular line-clamp-1`}>
                {title}
            </span>
        </p>
        </>
    )
    if(href){
        return<Link
            href={href}
            className="flex-center gap-1"
            >
            {MetricContent}
        </Link>
    }
    return(
        <div className="flex-center flex-wrap gap-1">
            {MetricContent}
        </div>
    )
};