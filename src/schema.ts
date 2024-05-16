import { pgTable, text, timestamp, uuid, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("applications", {
  id: uuid("id").defaultRandom().primaryKey(),
  // -----
  email: text("email").notNull(),
  name: text("name").notNull(),
  pan: text("pan").notNull(),
  mobile: text("mobile").notNull(),
  pincode: text("pincode").notNull(),
  checked: boolean("checked").default(false),
  // -----
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  card: text("card").notNull(),
});
