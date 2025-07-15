import { text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { dbSchema, post } from ".";

export const ageRating = dbSchema.table("age_rating", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: text("code").notNull().unique(), // e.g. "SU", "13+", "17+", "21+"
  description: text("description").notNull(), // e.g. "Untuk semua umur", "Untuk usia 13 tahun ke atas", etc.
});

export const ageRatingRelations = relations(ageRating, ({ many }) => ({
  posts: many(post),
}));
