import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
 connectionString: process.env.DATABASE_URL || process.env.PG_CONN_STRING,
 max: 20,
 idleTimeoutMillis: 30000,
 connectionTimeoutMillis: 2000,
});
const app = express();
app.use(express.json());
app.use(morgan('dev'));
// Health check
app.get('/health', async (req, res) => {
 try {
 await pool.query('SELECT 1');
 res.json({ ok: true });
 } catch (err) {
 res.status(500).json({ ok: false, error: err.message });
 }
});
// Example API
app.get('/api/users', async (req, res) => {
 try {
 const { rows } = await pool.query('SELECT id, name, email FROM users LIMIT 100');
 res.json(rows);
 } catch (err) {
 console.error(err);
 res.status(500).json({ error: 'Error fetching users' });
 }
});
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening ${port}`));1~import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
 connectionString: process.env.DATABASE_URL || process.env.PG_CONN_STRING,
 max: 20,
 idleTimeoutMillis: 30000,
 connectionTimeoutMillis: 2000,
});
const app = express();
app.use(express.json());
app.use(morgan('dev'));
// Health check
app.get('/health', async (req, res) => {
 try {
 await pool.query('SELECT 1');
 res.json({ ok: true });
 } catch (err) {
 res.status(500).json({ ok: false, error: err.message });
 }
});
// Example API
app.get('/api/users', async (req, res) => {
 try {
 const { rows } = await pool.query('SELECT id, name, email FROM users LIMIT 100');
 res.json(rows);
 } catch (err) {
 console.error(err);
 res.status(500).json({ error: 'Error fetching users' });
 }
});
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening ${port}`));1~import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
 connectionString: process.env.DATABASE_URL || process.env.PG_CONN_STRING,
 max: 20,
 idleTimeoutMillis: 30000,
 connectionTimeoutMillis: 2000,
});
const app = express();
app.use(express.json());
app.use(morgan('dev'));
// Health check
app.get('/health', async (req, res) => {
 try {
 await pool.query('SELECT 1');
 res.json({ ok: true });
 } catch (err) {
 res.status(500).json({ ok: false, error: err.message });
 }
});
// Example API
app.get('/api/users', async (req, res) => {
 try {
 const { rows } = await pool.query('SELECT id, name, email FROM users LIMIT 100');
 res.json(rows);
 } catch (err) {
 console.error(err);
 res.status(500).json({ error: 'Error fetching users' });
 }
});
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening ${port}`));1~import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
 connectionString: process.env.DATABASE_URL || process.env.PG_CONN_STRING,
 max: 20,
 idleTimeoutMillis: 30000,
 connectionTimeoutMillis: 2000,
});
const app = express();
app.use(express.json());
app.use(morgan('dev'));
// Health check
app.get('/health', async (req, res) => {
 try {
 await pool.query('SELECT 1');
 res.json({ ok: true });
 } catch (err) {
 res.status(500).json({ ok: false, error: err.message });
 }
});
// Example API
app.get('/api/users', async (req, res) => {
 try {
 const { rows } = await pool.query('SELECT id, name, email FROM users LIMIT 100');
 res.json(rows);
 } catch (err) {
 console.error(err);
 res.status(500).json({ error: 'Error fetching users' });
 }
});
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening ${port}`));
