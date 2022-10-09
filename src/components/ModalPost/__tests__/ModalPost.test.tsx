import { describe, expect, test, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { ModalPost } from '../ModalPost';

describe('ModalPost', () => {
  const props = {
    post: [
      {
        id: 1,
        title: 'title',
        body: 'body',
        userId: 1,
      },
    ],
    onModalVisible: jest.fn(),
  };

  test('should render correctly', () => {
    render(<ModalPost onModalVisible={props.onModalVisible} posts={props.post} />);

    expect(screen.getByText('body')).toBeTruthy();
  });
});
