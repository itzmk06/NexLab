import Link from "next/link";
import RenderTag from "./RenderTag";

const trendQuestions = [
  {
    _id: 1,
    question:
      "How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?",
  },
  {
    _id: 2,
    question:
      "What are the benefits and trade-offs of using Server-Side Rendering (SSR) in Next.js?",
  },
  {
    _id: 3,
    question:
      "Node.js res.json() and res.send(), not working but still able to change status code",
  },
  {
    _id: 4,
    question: "How to center a div?",
  },
  {
    _id: 5,
    question: "ReactJs or NextJs for begginers i ask for advice",
  },
];

const popularTags=[
    {
        _id:1,
        name:"javascript",
        totalQuestions:10,
        showCount:1
    },
    {
        _id:2,
        name:"java",
        totalQuestions:12,
        showCount:1
    },
        {
            _id:3,
            name:"python",
            totalQuestions:8,
            showCount:1
        },
        {
            _id:4,
            name:"react",
            totalQuestions:50,
            showCount:1
        },
];

export default function RightSideBar() {
  return (
    <section className="background-light900_dark200 light-border  custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-r px-6 pt-20 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div>
        <h4 className="text-dark300_light900 text-lg font-semibold">
          Top Questions
        </h4>
        <div className="body-medium text-dark500_light700 mt-2 flex w-full flex-col gap-[10px] ">
          {trendQuestions.map((question) => {
            return (
              <Link
                href={`/questions/${question?._id}`}
                key={question?._id}
                className="flex items-start gap-2 rounded-md  px-1 py-2 shadow-sm  hover:bg-blue-500 hover:text-light-900 dark:shadow-sm "
              >
                <p>{question?.question}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-1 py-6">
        <h4 className="text-dark300_light900 text-lg font-semibold">
            Popular tags
        </h4>
        <div>
          {
            popularTags.map((tag)=>{
                return(
                        <div className="mt-4 flex gap-4" key={tag?._id}>
                            <RenderTag
                             name={tag?.name} 
                             key={tag?._id}
                             _id={tag?._id}
                            totalQuestions={tag?.totalQuestions}
                            showCount
                             />
                        </div>
                )
            })
          }
        </div>
      </div>
    </section>
  );
}
