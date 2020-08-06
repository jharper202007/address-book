import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ContactTable from './../ContactList/ContactTable';
import useApi from '../../hooks/useApi';

const SearchResults = () => {
  const { search } = useLocation();
  const [_, q] = search.split('q=');

  const {isLoading, data} = useApi(`search?name=${q}`);
  const {contacts} = data;

  return (
    <div className="col ">
      {isLoading && <div>Loading results...</div>}

      {!isLoading && contacts && !contacts.length && (
        <p>No results found for <strong>{q}</strong></p>
      )}

      {!isLoading && contacts && (contacts.length > 0) && (
        <>
          <p>Search results for <strong>{q}</strong>:</p>
          <ContactTable contacts={contacts} />
        </>
      )}
    </div>
  );
}

export default SearchResults;
