"use server";

import { selectPostType } from "@/app/(routes)/add-post/zod-post";
import { db } from "@/db";
import { post } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getPostBySlug(
  slug: string,
): Promise<selectPostType | null> {
  try {
    const [data] = await db.select().from(post).where(eq(post.slug, slug));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
