"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  console.log("About to connect!");
  try {
    // connect to db
    connectToDatabase();
  } catch (error) {
    console.log(error);
  } finally {
    /* empty */
  }
}
