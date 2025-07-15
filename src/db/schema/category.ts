import { text, timestamp, uuid } from "drizzle-orm/pg-core";
import { dbSchema } from "./schema";
import { relations } from "drizzle-orm";
import { postToCategory } from ".";

export const category = dbSchema.table("category", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const categoryRelations = relations(category, ({ many }) => ({
  posts: many(postToCategory),
}));
