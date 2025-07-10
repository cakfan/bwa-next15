import { selectPostType } from "@/app/(routes)/add-post/zod-post";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({
  title,
  slug,
  poster,
  content,
  createdAt,
}: selectPostType) => {
  return (
    <Link
      href={`/p/${slug}`}
      className="group border-border relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md dark:bg-black"
    >
      {/* Poster */}
      <div className="bg-muted relative aspect-[3/4] overflow-hidden">
        <Image
          src={poster}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Content */}
      <div className="space-y-1 p-4">
        <h3 className="text-foreground line-clamp-2 text-lg font-semibold">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-2 text-sm">{content}</p>
        <p className="text-muted-foreground text-xs">
          {new Date(createdAt!).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
