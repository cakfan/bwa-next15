"use server";

import { db } from "@/db";
import { post, user } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { postFieldsWithAuthor, PostWithAuthor } from "./type";
import { unstable_noStore } from "next/cache";

export async function getPostList(): Promise<PostWithAuthor[]> {
  unstable_noStore();
  try {
    const data = await db
      .select(postFieldsWithAuthor)
      .from(post)
      .leftJoin(user, eq(post.author, user.id))
      .orderBy(desc(post.createdAt));

    return data;
  } catch (error) {
    console.error("getPostList error:", error);
    return [];
  }
}
