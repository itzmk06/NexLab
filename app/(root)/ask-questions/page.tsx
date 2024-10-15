import Questions from "@/components/forms/Questions";

export default  function Page(){
    return (
        <div>
            <h1 className="text-dark100_light900 text-lg font-semibold">Ask a question</h1>
            <div className="mt-3">
                <Questions/>
            </div>
        </div>
    )
};