import { text, timestamp, uuid } from "drizzle-orm/pg-core";
import { dbSchema, user } from ".";

export const post = dbSchema.table("post", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  poster: text("image").notNull(),
  author: text("author").references(() => user.id),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
