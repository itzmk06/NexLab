import Link from "next/link";
import { Button } from "@/components/ui/button"
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import DashBoardFilters from "@/components/dashboard/DashBoardFilters";
import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";

const questions= [
    {
        _id: "1",
        title: "Cascading deletes in sqlalchemy?",
        tags: [
            {
                _id: "1",
                name: "python",
            },
            {
                _id: "2",
                name: "sql"
            }
        ],
        author: {
            _id: "a1",
            name: "John Doe",
            picture: "https://example.com/john.jpg" 
        },
        upVotes: 10,
        views: 100,
        answers: [], 
        createdAt: new Date('2024-09-01T12:00:00.00Z')
    },
    {
        _id: "2",
        title: "What is NexLab",
        tags: [
            {
                _id: "1",
                name: "math",
            },
            {
                _id: "2",
                name: "algorithms"
            }
        ],
        author: {
            _id: "a2",
            name: "Samrath",
            picture: "https://example.com/samrath.jpg"
        },
        upVotes: 60,
        views: 200,
        answers: [], 
        createdAt: new Date('2024-02-01T12:00:00.00Z')
    }
];


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
            <div className="mt-5 flex w-full flex-col gap-3">
                {
                    questions.length>0?(
                        questions.map((question)=>{
                            return (
                                <QuestionCard 
                                    key={question._id}
                                    _id={question._id}
                                    title={question.title}
                                    tags={question.tags}
                                    author={question.author}
                                    upVotes={question.upVotes}
                                    views={question.views}
                                    answers={question.answers}
                                    createdAt={question.createdAt}
                                />
                            )
                        })
                    ):(
                            <NoResults
                                title="There&apos;s no questions to show"
                                description="Be the first to break silence! Ask a question and kickstart the discussion. our query could be the next big thing others learn from. Get involved!"
                                link="/"
                                linkTitle="Ask a Question"
                            />
                    )
                }
            </div>
        </div>
    )
};