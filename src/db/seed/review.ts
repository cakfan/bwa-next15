import { db } from "@/db";
import { review } from "@/db/schema";
import { randomUUID } from "crypto";

async function main() {
  console.log("Seeding reviews...");
  try {
    await db.insert(review).values([
      {
        id: randomUUID(),
        userId: "user-1",
        postId: "post-id-1",
        content: "This movie was amazing!",
      },
    ]);
    console.log("Reviews seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding reviews:", error);
    process.exit(1);
  }
}

main();
