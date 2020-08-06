import React from 'react';
import { render } from '@testing-library/react'

import ContactListItem from '.';

describe('ContactListItem tests', () => {
  const contact = {
    id: 1,
    first_name: 'Test',
    last_name: 'User',
    email: 'test.user@example.com',
    deleted_at: null
  }

  it('renders as expected', () => {
    const { getByRole, getByText } = render(
      <table>
        <tbody>
          <ContactListItem contact={contact} />
        </tbody>
      </table>
    );

    const fullName = `${contact.first_name} ${contact.last_name}`;

    const title = getByRole('heading');
    expect(title).toHaveTextContent(fullName)

    expect(getByText(contact.email)).toBeTruthy();

    const row = getByRole('row');
    expect(row.classList.contains('is-deleted')).toBe(false);
  });

  it('renders differently for deleted contacts', () => {
    const deletedContact = {
      ...contact,
      deleted_at: '2020-01-01 20:20:20'
    };

    const { getByRole } = render(
      <table>
        <tbody>
          <ContactListItem contact={deletedContact} />
        </tbody>
      </table>
    );
    const row = getByRole('row');
    expect(row.classList.contains('is-deleted')).toBe(true);
  })
});
