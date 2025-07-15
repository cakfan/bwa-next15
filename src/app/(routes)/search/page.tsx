import SearchResult from "@/components/search-result";
import { Suspense } from "react";

interface SearchProps {
  searchParams: Promise<{
    q?: string;
    country?: string;
    category?: string;
    ageRating?: string;
    rating?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const query = await searchParams;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SearchResult {...query} />
    </Suspense>
  );
}
