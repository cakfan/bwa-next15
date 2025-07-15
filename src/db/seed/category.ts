import { db } from "@/db";
import { category } from "@/db/schema";

const categoryNames = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Sport",
  "Thriller",
  "War",
  "Western",
];

async function main() {
  console.log("Seeding film categories...");
  try {
    const values = categoryNames.map((name) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
    }));

    await db.insert(category).values(values);
    console.log("Film categories seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding film categories: ", error);
    process.exit(1);
  }
}

main();
