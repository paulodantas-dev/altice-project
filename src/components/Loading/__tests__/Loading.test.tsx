import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Loading } from '../Loading';

describe('Loading', () => {
  test('should render correctly', () => {
    render(<Loading />);

    expect(screen.getByTestId('loading')).toBeTruthy();
  });
});
