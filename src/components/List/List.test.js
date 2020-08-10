import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List from './List';

describe('<List />', () => {
  it('Rendering list data', () => {
    const post = render(
      <List UserList={[{ id: 1, userId: 2, title: 'Post Title', body: 'Post Body' }]} UserFilteredList={[{ id: 1, userId: 2, title: 'Post Title', body: 'Post Body' }]} selectedData={() => {}} />
    );
    expect(post.container).toBeTruthy();
  });
  it('Click on Edit button', () => {
    const selectedData = jest.fn();
    const { getByRole } = render(
      <List UserList={[{ id: 1, userId: 2, title: 'Post Title', body: 'Post Body' }]} selectedData={selectedData} />
    );
    const editButton = getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);
  });
});