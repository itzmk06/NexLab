"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";
// import { GetQuestionParams } from "./shared.types";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    await connectToDatabase();
    // get questions from database
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  console.log("About to connect!");
  try {
    // connect to db
    await connectToDatabase();
    const { title, content, tags, author, path } = params;
    // create question
    const question = await Question.create({
      title,
      content,
      author,
    });
    const tagDocuments = [];
    // filter, update query on tags
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        // get
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // create an interaction record for the user's ask question action

    // Increment author's reputation by +5 for creating a question

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  } finally {
    /* empty */
  }
}
