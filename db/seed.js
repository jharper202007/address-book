const faker = require('faker');
const sqlite3 = require('sqlite3').verbose();

const args = process.argv.slice(2);
// Allow command line arg to change number of contacts created
// eg `node seed.js 100`
const SIZE = Number(args[0]) || 150;

function makeRandomContact(data = {}) {
  const first = faker.name.firstName();
  const last = faker.name.lastName();

  const domain = `${faker.lorem.word()}.${faker.internet.domainSuffix()}`;
  const email = `${first}.${last}@${domain}`
  .toLowerCase()
  .replace('\'', ''); // Replace apostrophes in case of names like O'reilly;

  return {
    first_name: first,
    last_name: last,
    email,
    ...data
  };
}

function createContacts(number) {
  return [...Array(number)]
    .map((_, i) => makeRandomContact({ id: i + 1 }));
}

const db = new sqlite3.Database('db/address_book.sqlite');

const contacts = createContacts(SIZE);
contacts.forEach(contact => {
  const { id, first_name, last_name, email } = contact;
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

  const values = [id, first_name, last_name, email, timestamp, null];
  // For simplicity I'm just creating a new INSERT statement for each row
  // instead of batching them
  const sql = (
    `INSERT INTO contacts(id, first_name, last_name, email, created_at, updated_at)
    VALUES (${values.map(val => `"${val}"`).join(',')});`
  );

  db.run(sql, (err) => {
    if (err) { return console.error(err.message); }
    console.log(`Row inserted: ${id}`);
  });
});
