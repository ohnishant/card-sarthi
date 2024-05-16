import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "dotenv";

config({ path: ".env.local" });

const url = `${process.env.DATABASE_URL}?options=project%3D${process.env.PROJECT_NAME}`;
const db = drizzle(postgres(url, { ssl: "require", max: 1 }));

const main = async () => {
  await migrate(db, { migrationsFolder: "drizzle" });
  process.exit(0);
};

main();

// const db = drizzle(
//   postgres({
//     host: PGHOST,
//     database: PGDATABASE,
//     username: PGUSER,
//     password: PGPASSWORD,
//     port: 5432,
//     ssl: "require",
//     connection: {
//       options: `project=${ENDPOINT_ID}`,
//     },
//     max: 1,
//   }),
// );
