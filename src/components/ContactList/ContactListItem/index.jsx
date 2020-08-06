import React, { useState } from 'react';

import DeleteContactButton from '../DeleteContactButton';

const ContactListItem = ({ contact }) => {
  console.log(contact)
  const [isDeleted, setIsDeleted] = useState(contact.deleted_at !==  null);

  return (
    <tr className={isDeleted ? 'is-deleted' : ''}>
      <td>
        <h5>{contact.first_name} {contact.last_name}</h5>
      </td>

      <td>
        {contact.email}
      </td>

      <td>
        <div className="btn-group">
          {!isDeleted && (
            <DeleteContactButton contactId={contact.id} onDelete={() => setIsDeleted(true)} />
          )}
        </div>

      </td>
    </tr>
  );
}

export default ContactListItem;
