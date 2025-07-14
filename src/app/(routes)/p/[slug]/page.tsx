// src/app/(routes)/p/[slug]/page.tsx
import { Suspense } from "react";
import PostDetail from "./post-detail";
import PostDetailSkeleton from "./skeleton";
import { Metadata } from "next";
import { getPostBySlug } from "@/actions/post/getBySlug";

interface DetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post?.title,
    description: post?.content.replace(/(<([^>]+)>)/gi, ""),
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  return (
    <Suspense fallback={<PostDetailSkeleton />}>
      <PostDetail slug={slug} />
    </Suspense>
  );
}
