import { getPostList } from "@/actions/post/getList";
import PostCard from "./post-card";

const ListPost = async () => {
  const posts = await getPostList();

  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground py-10 text-center">
        Belum ada post tersedia.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ListPost;
