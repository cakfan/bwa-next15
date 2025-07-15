import { uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { country, dbSchema, post } from ".";

export const postToCountry = dbSchema.table("post_to_country", {
  postId: uuid("post_id")
    .notNull()
    .references(() => post.id, { onDelete: "cascade" }),
  countryId: uuid("country_id")
    .notNull()
    .references(() => country.id, { onDelete: "cascade" }),
});

export const postToCountryRelations = relations(postToCountry, ({ one }) => ({
  post: one(post, {
    fields: [postToCountry.postId],
    references: [post.id],
  }),
  country: one(country, {
    fields: [postToCountry.countryId],
    references: [country.id],
  }),
}));
