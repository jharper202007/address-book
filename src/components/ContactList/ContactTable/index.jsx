import React from 'react';

import ContactListItem from './../ContactListItem';

const ContactTable = ({ contacts }) => (
  <div className="col table-responsive">
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
      </tbody>
    </table>
  </div>
);

export default ContactTable;
