import { Pool } from "pg";

const connectionString = 'postgres://jbvttezz:O1WwF61Q5ZWPei0om6NF8kSO-UuesFsd@motty.db.elephantsql.com/jbvttezz';

const db = new Pool({ connectionString });

export default db;
