import { db } from "@/db";
import { rating } from "@/db/schema";
import { randomUUID } from "crypto";

async function main() {
  console.log("Seeding ratings...");
  try {
    await db.insert(rating).values([
      {
        id: randomUUID(),
        userId: "user-1",
        postId: "post-id-1", // sesuaikan dengan ID dari seed post
        value: 5,
      },
    ]);
    console.log("Ratings seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding ratings:", error);
    process.exit(1);
  }
}

main();
