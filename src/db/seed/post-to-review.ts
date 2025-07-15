import { db } from "@/db";
import { postToCategory } from "@/db/schema";

async function main() {
  console.log("Seeding post-category relationships...");
  try {
    await db.insert(postToCategory).values([
      {
        postId: "post-id-1",
        categoryId: "category-id-1",
      },
    ]);
    console.log("Post-category relationships seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding postToCategory:", error);
    process.exit(1);
  }
}

main();
