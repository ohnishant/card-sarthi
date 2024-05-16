import { defineConfig } from "drizzle-kit";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const DB_URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?endpoint=${ENDPOINT_ID}`;

export default defineConfig({
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DB_URL,
  },
  verbose: true,
  strict: true,
});
