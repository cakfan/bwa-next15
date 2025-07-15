"use server";

import {
  insertPostType,
  selectPostType,
} from "@/app/(routes)/add-post/zod-post";
import { db } from "@/db";
import { post } from "@/db/schema";
import { getMe } from "../user";

export async function addPost(data: insertPostType): Promise<{
  success: boolean;
  data?: selectPostType;
  message?: string;
}> {
  try {
    const me = await getMe();
    const [add] = await db
      .insert(post)
      .values({ ...data, authorId: me?.id })
      .returning();
    return { success: true, data: add };
  } catch (error) {
    console.error("Add Post:", error);
    return { success: false, message: "Something went wrong" };
  }
}
