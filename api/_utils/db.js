import pgp from 'pg-promise';

const db = pgp()(process.env.PG_CONNECTION_STRING);

export default db;