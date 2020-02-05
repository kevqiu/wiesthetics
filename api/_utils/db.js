import { Pool } from 'pg';

const db = new Pool({ connectionString: process.env.PG_CONNECTION_STRING });

export default db;