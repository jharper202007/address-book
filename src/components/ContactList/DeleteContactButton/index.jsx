import React, { useState } from 'react';

const DeleteContactButton = ({ contactId, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteContact = () => {
    setIsDeleting(true);

    fetch(`contacts/${contactId}`, { method: 'delete' })
    .then(res => {
      setIsDeleting(false);

      if (res.status === 204) {
        onDelete();
      }
    });
  };

  return (
    <button
      className="btn btn-danger"
      onClick={deleteContact}
      disabled={isDeleting}
    >
    Delete
  </button>
  )
}

export default DeleteContactButton;
