import { integer, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { dbSchema, post, user } from ".";

export const rating = dbSchema.table("rating", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => post.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  value: integer("value").notNull(), // 1–5 misalnya
});

export const ratingRelations = relations(rating, ({ one }) => ({
  post: one(post, {
    fields: [rating.postId],
    references: [post.id],
  }),
  user: one(user, {
    fields: [rating.userId],
    references: [user.id],
  }),
}));
