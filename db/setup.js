const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = 'db/address_book.sqlite';

// Remove any existing DB
fs.unlink(DB_PATH, (err) => {
  // File doesn't exist yet;
  if (err && err.code === 'ENOENT') { return; }
  // Error deleting file
  if (err) { return console.error('Error: ', err); }
  // Successful delete
  console.log(`${DB_PATH} deleted.`);
});

// Create new DB
const db = new sqlite3.Database(DB_PATH);

db.run(`CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(64) NOT NULL,
  last_name VARCHAR(64) NOT NULL,
  email VARCHAR(255),
  created_at DATETIME,
  updated_at DATETIME
)`);

db.close()
