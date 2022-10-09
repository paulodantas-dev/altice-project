import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Post } from '../Post';

describe('Post', () => {
  test('should render correctly', () => {
    const props = {
      post: {
        userId: 1,
        id: 1,
        title: 'Post 1',
        body: 'Post 1 Body',
      },
    };
    render(<Post post={props.post} />);
    expect(screen.getByText('Post 1 Body')).toBeTruthy();
  });
});
