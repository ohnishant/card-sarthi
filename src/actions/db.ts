"use server";
import postgres from "postgres";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

export async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

export async function addEntryToApplications({
  pan,
  mobile,
  name,
  email,
  pincode,
}: {
  pan: string;
  mobile: string;
  name: string;
  email: string;
  pincode: string;
}) {
  try {
    const [dbResponse] = await sql`
      INSERT INTO applications (pan, mobile, name, email, pincode)
      VALUES (${pan}, ${mobile}, ${name}, ${email}, ${pincode})
      RETURNING id
    `;
    const id = dbResponse && dbResponse.id ? dbResponse.id : null;
    console.log("Added entry to applications", id);
    return id;
  } catch (error) {
    console.error("Error adding entry to applications", error);
  }
}

export async function getDatabaseTime(details: any) {
  try {
    const [dbResponse] = await sql`SELECT NOW()`;
    console.log("Database time", dbResponse);
    return dbResponse;
  } catch (error) {
    console.error("Error getting database time", error);
    return null;
  }
}
