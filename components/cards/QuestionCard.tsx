import Link from "next/link"
import RenderTag from "../shared/RenderTag"
import Metric from "../shared/Metric"
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils"

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
        <div className="card-wrapper rounded-[10px] p-5 sm:px-6">
            <div className="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row">
                <div>
                    <Link href={`/question/${_id}`}>
                        <h3 className="text-dark200_light900 line-clamp-1 flex-1 text-lg font-semibold">
                            {title}
                        </h3>
                    </Link>
                </div>
                {/* TODO:if signed in add edit and delete actions  */}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
                {
                    tags.map((tag)=>{
                        return<RenderTag
                                key={tag._id}
                                _id={tag._id}
                                name={tag.name}
                            />
                        
                    })
                }
            </div>
            <div className="flex-between mt-6 w-full flex-wrap gap-2">
                <Metric
                    imgUrl="/assets/icons/avatar.svg"
                    alt="user"
                    value={author?.name}
                    title={`- asked ${getTimestamp(createdAt)}`}
                    href={`/profile/${author?._id}`}
                    textStyles="body-medium text-dark400_light700 "
                />
                <Metric
                    imgUrl="/assets/icons/like.svg"
                    alt="Upvotes"
                    value={formatAndDivideNumber(upVotes)}
                    title=" Votes"
                    textStyles="small-medium text-dark400_light800"
                />
                <Metric
                    imgUrl="/assets/icons/message.svg"
                    alt="answers"
                    value={formatAndDivideNumber(answers.length)}
                    title=" Answers"
                    textStyles="small-medium text-dark400_light800"
                />
                <Metric
                    imgUrl="/assets/icons/eye.svg"
                    alt="views"
                    value={formatAndDivideNumber(views)}
                    title=" Views"
                    textStyles="small-medium text-dark400_light800"
                />
            </div>
            
        </div>
    )
};

// * stopped at 24:00 :Creating Question Card 