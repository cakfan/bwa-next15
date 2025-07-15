"use server";

import { db } from "@/db";
import { category } from "@/db/schema";

export async function getCategories() {
  return db.select().from(category);
}
