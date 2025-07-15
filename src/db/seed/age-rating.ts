import { db } from "@/db";
import { ageRating } from "@/db/schema";

const ageRatings = [
  { code: "G", label: "General Audiences" },
  { code: "PG", label: "Parental Guidance Suggested" },
  { code: "PG-13", label: "Parents Strongly Cautioned" },
  { code: "R", label: "Restricted" },
  { code: "NC-17", label: "Adults Only" },
  { code: "13+", label: "Suitable for 13 and above" },
  { code: "18+", label: "Adults only" },
];

async function main() {
  console.log("Seeding age ratings...");
  try {
    const values = ageRatings.map((r) => ({
      code: r.code,
      description: r.label,
    }));
    await db.insert(ageRating).values(values);
    console.log("Age ratings seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding age ratings:", error);
    process.exit(1);
  }
}

main();
