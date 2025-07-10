"use server";

import { db } from "@/db";
import { post } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getPostList() {
  try {
    const data = await db.select().from(post).orderBy(desc(post.createdAt));
    return data;
  } catch (error) {
    console.error("PostList:", error);
    return [];
  }
}
