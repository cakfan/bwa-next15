"use server";

import { db } from "@/db";
import { post, user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { postFieldsWithAuthor, PostWithAuthor } from "./type";

export async function getPostBySlug(
  slug: string,
): Promise<PostWithAuthor | null> {
  try {
    const [data] = await db
      .select(postFieldsWithAuthor)
      .from(post)
      .leftJoin(user, eq(post.author, user.id))
      .where(eq(post.slug, slug));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
