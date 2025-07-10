import { post } from "@/db/schema/post";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import z4 from "zod/v4";

export const insertPostSchema = createInsertSchema(post);

export const updatePostSchema = createUpdateSchema(post);

export const selectPostSchema = createSelectSchema(post);

export type insertPostType = z4.infer<typeof insertPostSchema>;

export type updatePostType = z4.infer<typeof updatePostSchema>;

export type selectPostType = z4.infer<typeof selectPostSchema>;
