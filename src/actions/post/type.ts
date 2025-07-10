import { post, user } from "@/db/schema";

export const postFieldsWithAuthor = {
  id: post.id,
  slug: post.slug,
  title: post.title,
  content: post.content,
  poster: post.poster,
  createdAt: post.createdAt,
  updatedAt: post.updatedAt,
  author: {
    id: user.id,
    name: user.name,
  },
};

export type PostWithAuthor = {
  id: string;
  slug: string;
  title: string;
  content: string;
  poster: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  author: {
    id: string;
    name: string;
  } | null;
};
