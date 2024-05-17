"use server";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { sql, eq } from "drizzle-orm";
import { applications } from "@/schema";

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

export async function getAllUnreadApplications() {
  try {
    const dbResponse = await db
      .select()
      .from(applications)
      .where(eq(applications.checked, false));
    return dbResponse;
  } catch (error) {
    console.error("Error getting all unread applications", error);
    return null;
  }
}

export async function getAllReadApplications() {
  try {
    const dbResponse = await db
      .select()
      .from(applications)
      .where(eq(applications.checked, true));
    return dbResponse;
  } catch (error) {
    console.error("Error getting all read applications", error);
    return null;
  }
}

export async function markApplicationAsRead(id: string) {
  try {
    const dbResponse = await db
      .update(applications)
      .set({ checked: true })
      .where(eq(applications.id, id))
      .returning({ updatedId: applications.id });
    return dbResponse[0].updatedId;
  } catch (error) {
    console.error("Error marking application as read", error);
    return null;
  }
}

export async function deleteApplication(id: string) {
  try {
    const dbResponse = await db
      .delete(applications)
      .where(eq(applications.id, id))
      .returning({ deletedId: applications.id });
    return dbResponse[0].deletedId;
  } catch (error) {
    console.error("Error deleting application", error);
    return null;
  }
}

export async function getApplicationByEmail(email: string) {
  try {
    const dbResponse = await db
      .select()
      .from(applications)
      .where(eq(applications.email, email));
    return dbResponse;
  } catch (error) {
    console.error("Error getting application by email", error);
    return null;
  }
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
      .insert(applications)
      .values({
        pan: pan,
        mobile: mobile,
        name: name,
        email: email,
        pincode: pincode,
        card: cardName,
      })
      .returning({ insertedId: applications.id });

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
