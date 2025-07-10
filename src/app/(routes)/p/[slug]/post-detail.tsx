import { getPostBySlug } from "@/actions/post/getBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";

const PostDetail = async ({ slug }: { slug: string }) => {
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl space-y-6 p-4">
      {/* Poster */}
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
        <Image
          src={post.poster}
          alt={post.title}
          fill
          className="rounded-xl object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-foreground text-3xl font-bold">{post.title}</h1>

      {/* Meta */}
      <div className="text-muted-foreground text-sm">
        <span>{new Date(post.createdAt!).toLocaleDateString() + " "}</span>
        &mdash; <span>{post.author?.name}</span>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none">
        {post.content.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
};

export default PostDetail;
