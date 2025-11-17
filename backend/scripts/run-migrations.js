import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pool = new Pool({
 connectionString: process.env.DATABASE_URL || process.env.PG_CONN_STRING,
});
async function run() {
 const migrationsDir = path.join(__dirname, '..', 'migrations');
 const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();
 try {
 for (const file of files) {
 const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
 console.log('Running migration', file);
 await pool.query(sql);
 }
 console.log('Migrations completed');
 await pool.end();
 process.exit(0);
 } catch (err) {
 console.error('Migration error', err);
 process.exit(1);
 }
}
run();
