import { getAllAgeRatings } from "@/actions/age/getList";
import { getCategories } from "@/actions/category/getList";
import { getCountries } from "@/actions/country/getList";
import { getFilteredPosts } from "@/actions/post/getFiltered";
import FilterSidebar from "@/components/filter-sidebar";

interface SearchResultProps {
  q?: string;
  country?: string;
  category?: string;
  ageRating?: string;
  rating?: string;
}

const SearchResult: React.FC<SearchResultProps> = async ({
  q,
  country,
  category,
  ageRating,
  rating,
}) => {
  const countries = await getCountries();
  const categories = await getCategories();
  const ageRatings = await getAllAgeRatings();

  const categorySlugs =
    category?.trim() === ""
      ? null
      : (category
          ?.split(",")
          .map((s) => s.trim())
          .filter(Boolean) ?? null);

  const posts = await getFilteredPosts({
    query: q || null,
    countryCode: country || null,
    categorySlug: categorySlugs,
    ageRatingCode: ageRating || null,
    rating: rating ? Number(rating) : null,
  });
  return (
    <div className="flex">
      <FilterSidebar
        countries={countries}
        categories={categories}
        ageRatings={ageRatings}
      />

      <div className="flex-1 p-6">
        <h1 className="mb-4 text-2xl font-semibold">Search Results</h1>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id}>
                <h2 className="text-xl font-medium">{post.title}</h2>
                <p className="text-muted-foreground">{post.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
