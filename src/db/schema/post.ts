import { text, timestamp, uuid } from "drizzle-orm/pg-core";
import {
  ageRating,
  dbSchema,
  postToCategory,
  postToCountry,
  rating,
  review,
  user,
} from ".";
import { relations } from "drizzle-orm";

export const post = dbSchema.table("post", {
  id: uuid("id").primaryKey().defaultRandom(),

  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  poster: text("poster").notNull(), // gambar utama (URL/file path)

  releaseDate: timestamp("release_date").defaultNow(),

  authorId: text("author_id").references(() => user.id), // FK ke user
  ageRatingId: uuid("age_rating_id").references(() => ageRating.id), // FK ke age_rating

  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const postRelations = relations(post, ({ one, many }) => ({
  author: one(user, {
    fields: [post.authorId],
    references: [user.id],
  }),
  ageRating: one(ageRating, {
    fields: [post.ageRatingId],
    references: [ageRating.id],
  }),
  categories: many(postToCategory),
  ratings: many(rating),
  reviews: many(review),
  countries: many(postToCountry),
}));
