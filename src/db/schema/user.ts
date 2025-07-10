import { boolean, text, timestamp } from "drizzle-orm/pg-core";
import { gender, dbSchema, role } from ".";

export const user = dbSchema.table("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  username: text("username").unique(),
  displayUsername: text("display_username"),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  role: role("role").default("member").notNull(),
  gender: gender("gender"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
