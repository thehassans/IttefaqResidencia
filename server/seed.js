import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedDatabase = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'mariadb',
    multipleStatements: true 
  });

  try {
    console.log('Connected to database server...');
    
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    console.log('Executing schema...');
    await connection.query(schema);
    
    console.log('Database initialized successfully!');
    console.log('Admin user created (if not existed).');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await connection.end();
  }
};

seedDatabase();
