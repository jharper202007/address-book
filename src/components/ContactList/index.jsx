import React from 'react';

import useApi from './../../hooks/useApi';
import ContactTable from './ContactTable';

const ContactList = () => {
  const {isLoading, data} = useApi('contacts');
  const {contacts = []} = data;

  if (isLoading) {
    return <div>Loading contacts...</div>
  }

  return (
      <ContactTable contacts={contacts} />
  );
}

export default ContactList;
