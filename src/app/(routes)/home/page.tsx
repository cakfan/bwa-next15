import ListPost from "@/components/list-post";
import PostSkeleton from "@/components/post-skeleton";
import { Suspense } from "react";

export default async function Homepage() {
  return (
    <div className="px-6 py-10">
      <Suspense fallback={<PostSkeleton />}>
        <ListPost />
      </Suspense>
    </div>
  );
}
