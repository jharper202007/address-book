import React from 'react';
import { render } from '@testing-library/react'

import ContactTable from '.';

const contacts = [
  { first_name: 'test', last_name: 'user', id: 1},
  { first_name: 'example', last_name: 'user', id: 2},
  { first_name: 'test', last_name: 'person', id: 3},
]

describe('ContactTable tests', () => {
  it('renders a row for each contact', () => {
    const { getAllByRole } = render(<ContactTable contacts={contacts} />);
    const row = getAllByRole('row');

    expect(row.length).toBe(contacts.length + 1); // +1 for header row
  });
});
