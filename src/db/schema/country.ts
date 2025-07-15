import { text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { dbSchema, postToCountry } from ".";

export const country = dbSchema.table("country", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: text("code").notNull().unique(), // e.g. "ID", "US", "JP"
  name: text("name").notNull(), // e.g. "Indonesia", "United States", etc.
});

export const countryRelations = relations(country, ({ many }) => ({
  posts: many(postToCountry), // ✅ many-to-many ke post
}));
