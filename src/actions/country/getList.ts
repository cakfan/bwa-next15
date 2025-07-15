"use server";

import { db } from "@/db";
import { country } from "@/db/schema";

export async function getCountries() {
  return await db.select().from(country);
}
