"use server";

import { db } from "@/db";
import { ageRating } from "@/db/schema";

export async function getAllAgeRatings() {
  return await db.select().from(ageRating).orderBy(ageRating.code);
}
