const SkeletonCard = () => {
  return (
    <div className="border-border animate-pulse overflow-hidden rounded-2xl border bg-white shadow-sm dark:bg-black">
      <div className="bg-muted aspect-[3/4]" />

      <div className="space-y-2 p-4">
        <div className="bg-muted h-4 w-3/4 rounded" />
        <div className="bg-muted h-3 w-full rounded" />
        <div className="bg-muted h-3 w-1/2 rounded" />
        <div className="bg-muted h-2 w-1/4 rounded" />
      </div>
    </div>
  );
};

const PostSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default PostSkeleton;
