SELECT * FROM contacts
  WHERE first_name LIKE ?
    OR last_name LIKE ?
    AND deleted_at IS NULL;
