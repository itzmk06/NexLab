"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";

export async function createQuestion(params: any) {
  console.log("About to connect!");
  try {
    // connect to db
    connectToDatabase();
    const { title, content, tags, author, path } = params;
    // create question
    const question = Question.create({
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
  } catch (error) {
    console.log(error);
  } finally {
    /* empty */
  }
}
