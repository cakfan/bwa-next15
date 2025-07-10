const PostDetailSkeleton = () => {
  return (
    <article className="mx-auto max-w-3xl animate-pulse space-y-6 p-4">
      {/* Poster */}
      <div className="bg-muted h-64 w-full rounded-xl" />

      {/* Title */}
      <div className="bg-muted h-8 w-3/4 rounded" />

      {/* Meta */}
      <div className="bg-muted h-4 w-1/3 rounded" />

      {/* Content lines */}
      <div className="space-y-3">
        <div className="bg-muted h-4 w-full rounded" />
        <div className="bg-muted h-4 w-5/6 rounded" />
        <div className="bg-muted h-4 w-2/3 rounded" />
        <div className="bg-muted h-4 w-full rounded" />
        <div className="bg-muted h-4 w-1/2 rounded" />
      </div>
    </article>
  );
};

export default PostDetailSkeleton;
