import React, { useState } from 'react';

import DeleteContactButton from '../DeleteContactButton';

const ContactListItem = ({ contact }) => {
  const [isDeleted, setIsDeleted] = useState(!!contact.deleted_at);

  return (
    <tr className={isDeleted ? 'is-deleted' : ''}>
      <td>
        <h5>{contact.first_name} {contact.last_name}</h5>
      </td>

      <td>
        {contact.email}
      </td>

      <td>
        {!isDeleted && (
          <DeleteContactButton contactId={contact.id} onDelete={() => setIsDeleted(true)} />
        )}
      </td>
    </tr>
  );
}

export default ContactListItem;
