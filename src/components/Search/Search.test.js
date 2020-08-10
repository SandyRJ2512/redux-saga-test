import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('<Search />', () => {
  it('Rendering search data', () => {
    const post = render(
      <Search getSearchResult={() => {}} />
    );
    expect(post.container).toBeTruthy();
  });
});