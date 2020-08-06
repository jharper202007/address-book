const sqlite3 = require('sqlite3').verbose();

const DB_PATH = 'db/address_book.sqlite';
const db = new sqlite3.Database(DB_PATH);

db.all(`SELECT * FROM contacts`, (err, rows) => {
  console.log(rows)
});

db.close()
