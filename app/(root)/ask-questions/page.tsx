import Questions from "@/components/forms/Questions";
import { getUserById } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  // const userId=auth();
  const userId = "12345678";
  if (!userId) {
    redirect("/sign-in");
  }
  const mongoUser = await getUserById({ userId });
  // console.log(mongoUser);
  return (
    <div>
      <h1 className="text-dark100_light900 text-lg font-semibold">
        Ask a question
      </h1>
      <div className="mt-3">
        <Questions mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
