import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'


import DeleteContactButton from '.';



describe('DeleteContactButton tests', () => {
  it('makes delete request when clicked', () => {
    jest.spyOn(window, 'fetch');

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    act(() =>{
      const {getAllByRole} = render(
        <DeleteContactButton contactId={1} onDelete={jest.fn()} />
      );

      const buttons = getAllByRole('button');
      expect(buttons.length).toBe(1);
      userEvent.click(buttons[0]);

    });

    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});
