import { text, timestamp, uuid } from "drizzle-orm/pg-core";
import { dbSchema, user } from ".";
import { relations } from "drizzle-orm";

export const post = dbSchema.table("post", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  poster: text("image").notNull(),
  author: text("author").references(() => user.id), // FK ke user
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const postRelations = relations(post, ({ one }) => ({
  author: one(user, {
    fields: [post.author],
    references: [user.id],
  }),
}));
