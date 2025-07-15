import { uuid } from "drizzle-orm/pg-core";
import { dbSchema } from "./schema";
import { category, post } from ".";
import { relations } from "drizzle-orm";

export const postToCategory = dbSchema.table("post_to_category", {
  postId: uuid("post_id")
    .notNull()
    .references(() => post.id, { onDelete: "cascade" }),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => category.id, { onDelete: "cascade" }),
});

export const postToCategoryRelations = relations(postToCategory, ({ one }) => ({
  post: one(post, {
    fields: [postToCategory.postId],
    references: [post.id],
  }),
  category: one(category, {
    fields: [postToCategory.categoryId],
    references: [category.id],
  }),
}));
