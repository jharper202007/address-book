const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Find custom query from DB folder
function query(queryPath) {
  return fs.readFileSync(`db/queries/${queryPath}.sql`).toString();
}

// Wrap string in wildcards for search purposes
function makeSearchTerm(search) {
  return `%${search}%`;
}

const app = express();
const HTTP_PORT = 8000;
const DB_PATH = 'db/address_book.sqlite';

const db = new sqlite3.Database(DB_PATH);

// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get('/search', (req, res) => {
  const SEARCH_QUERY = query('contacts/find_by_name');
  const searchTerm = makeSearchTerm(req.query.name);
  const bindings = [searchTerm, searchTerm];

  db.all(SEARCH_QUERY, bindings, (err, rows) => {
    if (err) {
      res.status(500);
      return res.json({ error: err.message });
    }

    return res.json({
      contacts: rows
    });
  });
})

// Soft delete user
app.delete('/delete/:id', (req, res) => {
  const DELETE_QUERY = query('contacts/delete_contact');
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  db.all(DELETE_QUERY, [timestamp, req.params.id], (err) => {
    if (err) {
      console.log(err)
      return res.json({ error: err.message });
    }

    res.status(204);
    return res.json([]);
  });
});

app.get('/contacts/:id', (req, res) => {
  const CONTACT_QUERY = query('contacts/find_by_id');
  db.get(CONTACT_QUERY, [req.params.id], (err, row) => {
    if (!row) {
      res.status(404);
      return res.json({ error: 'Contact not found' });
    }

    if (err) {
      console.log(err)
      return res.json({ error: err.message });
    }

    return res.json(row);
  })
})

app.get('/contacts', (req, res) => {
  const {limit} = req.query;
  const q = limit ? 'contacts/select_all_with_limit' : 'contacts/select_all';
  const CONTACTS_QUERY = query(q);

  const bindings = limit ? [limit] : [];

  db.all(CONTACTS_QUERY, bindings, (err, rows) => {
    if (err) {
      res.status(500);
      return res.json({ error: err.message });
    }

    return res.json({
      contacts: rows
    });
  });
});

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({"message":"Ok"})
});

// Default response for any other request
app.use(function(req, res){
  res.status(404);
});
