import Link from "next/link"

interface props{
    _id:string,
    title:string,
    tags:{
        _id:string,
        name:string,
    }[],
    author:{
        _id:string,
        name:string,
        picture:string
    },
    upVotes:number,
    views:number,
    answers:Array<Object>,
    createdAt:Date,
}

export default function QuestionCard({_id,title,tags,author,upVotes,views,answers,createdAt}:props){
    return(
        <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
            <div className="flex flex-col-reverse items-start justify-between gap-3 sm:flex-row">
                <div>
                    <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
                        {String(createdAt)}
                    </span>
                    <Link href={`/question/${_id}`}>
                        <h3>
                            {title}
                        </h3>
                    </Link>
                </div>

            </div>
        </div>
    )
};

// * stopped at 24:00 :Creating Question Card 