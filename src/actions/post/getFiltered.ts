import { db } from "@/db";
import {
  post,
  rating,
  review,
  user,
  category,
  ageRating,
  postToCategory,
  postToCountry,
  country,
} from "@/db/schema";
import { and, eq, ilike, sql } from "drizzle-orm";

type FilterOptions = {
  query?: string | null;
  countryCode?: string | null;
  categorySlug?: string[] | null;
  ageRatingCode?: string | null;
  rating?: number | null;
};

export async function getFilteredPosts({
  query,
  countryCode,
  categorySlug,
  ageRatingCode,
  rating: minRating,
}: FilterOptions) {
  const conditions = [];

  if (query) {
    conditions.push(ilike(post.title, `%${query}%`));
  }

  if (countryCode) {
    conditions.push(sql`
      ${post.id} IN (
        SELECT ptc.post_id
        FROM ${postToCountry} ptc
        JOIN ${country} c ON ptc.country_id = c.id
        WHERE c.code = ${countryCode}
      )
    `);
  }

  if (categorySlug && categorySlug.length > 0) {
    const values = categorySlug.map((s) => `'${s.replace(/'/g, "''")}'`);
    const rawArray = `ARRAY[${values.join(",")}]::text[]`;

    conditions.push(sql`
    ${post.id} IN (
      SELECT ptc.post_id
      FROM ${postToCategory} ptc
      JOIN ${category} c ON ptc.category_id = c.id
      WHERE c.slug = ANY(${sql.raw(rawArray)})
    )
  `);
  }

  if (ageRatingCode) {
    conditions.push(sql`
      ${post.ageRatingId} = (
        SELECT id FROM ${ageRating}
        WHERE code = ${ageRatingCode}
        LIMIT 1
      )
    `);
  }

  if (minRating != null) {
    conditions.push(sql`
      ${post.id} IN (
        SELECT r.post_id
        FROM ${rating} r
        GROUP BY r.post_id
        HAVING AVG(r.value) >= ${minRating}
      )
    `);
  }

  const posts = await db.query.post.findMany({
    where: conditions.length > 0 ? and(...conditions) : undefined,
    with: {
      author: true,
      ageRating: true,
      categories: { with: { category: true } },
      countries: { with: { country: true } },
      ratings: true,
      reviews: true,
    },
    orderBy: (fields, { desc }) => [desc(fields.createdAt)],
  });

  return posts;
}
