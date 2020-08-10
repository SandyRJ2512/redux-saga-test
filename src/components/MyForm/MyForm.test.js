import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyForm from './MyForm';

describe('<MyForm />', () => {
  it('Rendering form data', () => {
    const post = render(
      <MyForm selectedData={{ title: 'Post Title', body: 'Post Body', selectedIndex: 1 }} />
    );
    expect(post.container).toBeTruthy();
  });
  it('Click on Cancel button', () => {
    const toggle = jest.fn();
    const { getByRole } = render(
      <MyForm selectedData={{ title: 'Post Title', body: 'Post Body', selectedIndex: 1 }} toggle={toggle} />
    );
    const cancelButton = getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(toggle.mock.calls.length).toEqual(1);
  });
});