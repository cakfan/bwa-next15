import { db } from "@/db";
import { postToCategory, post, category } from "@/db/schema";

function getRandomSubset<T>(arr: T[], min = 1, max = 3): T[] {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

async function main() {
  console.log("🌱 Seeding post-to-category relations...");
  try {
    const [posts, categories] = await Promise.all([
      db.select().from(post),
      db.select().from(category),
    ]);

    if (posts.length === 0 || categories.length === 0) {
      throw new Error("No posts or categories found to seed.");
    }

    const relations = posts.flatMap((p) => {
      const selectedCategories = getRandomSubset(categories);
      return selectedCategories.map((c) => ({
        postId: p.id,
        categoryId: c.id,
      }));
    });

    // Optional: clear before insert
    await db.delete(postToCategory);

    await db.insert(postToCategory).values(relations);
    console.log(`✅ Seeded ${relations.length} post-category relations.`);
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding postToCategory:", err);
    process.exit(1);
  }
}

main();
