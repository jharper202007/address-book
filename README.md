## James Harper tech test

- `npm install` to install dependencies
- `npm run server` will run the API at `http://localhost:8000`
- Available API endpoints are `/devices`, `/devices/:id`, `/devices/:id/connections`
- `npm run start` will run the React app at `http://localhost:3000`
- `npm run test` will run test suite

### Available Endpoints
- `GET /contacts` - List all contacts
- `GET /contacts?limit=25` - List all contacts, but limit results
- `GET /contacts/1` - View an individual contact
- `GET /search?name=bob` - Search for a user. (Checks against both first and last name)
- `DELETE /contacts/1` - Delete a user. (Uses soft-deletes: record is not completely removed)

### Notes
- A pre-populated sqlite database file is already included in the repo and is ready to use. The DB seed & set up files were left in to show how they were created though. `npm run db:refresh` can be run to re-seed the database

