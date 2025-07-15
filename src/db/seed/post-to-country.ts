import { db } from "@/db";
import { postToCountry } from "@/db/schema";

async function main() {
  console.log("Seeding post-country relationships...");
  try {
    await db.insert(postToCountry).values([
      {
        postId: "0f7e2d02-68d8-4492-b14f-1e984d2cb30c",
        countryId: "fbef5a41-7a24-4116-ac62-7c7f9e46e19d", // atau UUID jika pakai UUID
      },
      {
        postId: "2491de3a-0f66-4bd4-9f5a-76abe2b3e7b9",
        countryId: "fbef5a41-7a24-4116-ac62-7c7f9e46e19d", // atau UUID jika pakai UUID
      },
      {
        postId: "5985bd4c-feac-4953-bba6-006e16f24d27",
        countryId: "fbef5a41-7a24-4116-ac62-7c7f9e46e19d", // atau UUID jika pakai UUID
      },
      {
        postId: "c4c6b6ba-6c28-4c76-8d8d-c8a6a1bda5b5",
        countryId: "fbef5a41-7a24-4116-ac62-7c7f9e46e19d", // atau UUID jika pakai UUID
      },
      {
        postId: "9ff63db2-cc05-4f4c-a36c-b02783651935",
        countryId: "fbef5a41-7a24-4116-ac62-7c7f9e46e19d", // atau UUID jika pakai UUID
      },
      {
        postId: "03e611ff-13f8-4971-8cee-125ba5a675e0",
        countryId: "2be7f17f-9c72-4d4b-b78f-0442fb49ca06", // atau UUID jika pakai UUID
      },
      {
        postId: "27b4a228-1d56-4c91-9af6-f2106d02ab4f",
        countryId: "2be7f17f-9c72-4d4b-b78f-0442fb49ca06", // atau UUID jika pakai UUID
      },
      {
        postId: "2ae414fc-363a-4a83-b780-46404e716e97",
        countryId: "2be7f17f-9c72-4d4b-b78f-0442fb49ca06", // atau UUID jika pakai UUID
      },
      {
        postId: "4326458a-6b16-4a1c-9791-ef0724eddc93",
        countryId: "2be7f17f-9c72-4d4b-b78f-0442fb49ca06", // atau UUID jika pakai UUID
      },
      {
        postId: "b26cb732-1b1c-4499-9b94-2ba18d67a4e3",
        countryId: "2be7f17f-9c72-4d4b-b78f-0442fb49ca06", // atau UUID jika pakai UUID
      },
    ]);
    console.log("Post-country relationships seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding postToCountry:", error);
    process.exit(1);
  }
}

main();
