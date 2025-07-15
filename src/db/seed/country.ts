import { db } from "@/db";
import { country } from "@/db/schema";

const countries = [
  { code: "US", name: "United States" },
  { code: "ID", name: "Indonesia" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "GB", name: "United Kingdom" },
  { code: "FR", name: "France" },
  { code: "IN", name: "India" },
];

async function main() {
  console.log("Seeding countries...");
  try {
    await db.insert(country).values(countries);
    console.log("Countries seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding countries:", error);
    process.exit(1);
  }
}

main();
