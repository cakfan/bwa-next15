import { text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { dbSchema, post, user } from ".";

export const review = dbSchema.table("review", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => post.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reviewRelations = relations(review, ({ one }) => ({
  post: one(post, {
    fields: [review.postId],
    references: [post.id],
  }),
  user: one(user, {
    fields: [review.userId],
    references: [user.id],
  }),
}));
