import React from 'react';
import { render } from '@testing-library/react';
import PopupModal from './PopupModal';

describe('<PopupModal />', () => {
  it('Rendering popup modal data', () => {
    const post = render(
      <PopupModal selectedData={{ id: 1, title: 'Post Title', body: 'Post Body' }} isOpen={true} ontoggleSave={() => {}} />
    );
    expect(post.container).toBeTruthy();
  });
});