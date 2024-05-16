"use server";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { sql } from "drizzle-orm";
import { users } from "@/schema";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const db = drizzle(
  postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: "require",
    connection: {
      options: `project=${ENDPOINT_ID}`,
    },
  }),
);

export async function getPgVersion() {
  const version = db.execute(sql`select version()`);
  return version;
}

export async function addEntryToApplications({
  pan,
  mobile,
  name,
  email,
  pincode,
  cardName,
}: {
  pan: string;
  mobile: string;
  name: string;
  email: string;
  pincode: string;
  cardName: string;
}) {
  try {
    const dbResponse = await db
      .insert(users)
      .values({
        pan: pan,
        mobile: mobile,
        name: name,
        email: email,
        pincode: pincode,
        card: cardName,
      })
      .returning({ insertedId: users.id });

    const response = dbResponse[0];
    console.log("Inserted id", response.insertedId);
    return response.insertedId;
  } catch (error) {
    console.error("Error adding entry to applications", error);
  }
}

export async function getDatabaseTime(details: any) {
  try {
    console.log(details);
    const dbResponse = await db.execute(sql`SELECT NOW()`);
    const time = dbResponse.at(0)?.now;
    console.log("Database time", time);
    return time;
  } catch (error) {
    console.error("Error getting database time", error);
    return null;
  }
}
