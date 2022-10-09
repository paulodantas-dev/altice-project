import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { WEBSITE } from 'config/constant';

import { Home } from '../Home';

describe('HomePage', () => {
  const props = {
    letters: [
      {
        id: 1,
        name: 'Paulo',
        username: 'Jrw0w',
        email: 'paulodantasbjr@gmail.com',
        address: {
          street: 'Av. Dr. Francisco Sá Carneiro, 690',
          suite: '1º Andar',
          city: 'Tondela, Viseu',
          zipcode: '3460-523',
          geo: {
            lat: '40.51845000000003',
            lng: '-8.083099999999945',
          },
        },
        phone: '983-951-086',
        website: WEBSITE,
        company: {
          name: "Paulo's Company",
          catchPhrase: "Paulo's Catch Phrase",
          bs: "Paulo's BS",
        },
        posts: [
          {
            userId: 1,
            id: 1,
            title: 'Post 1',
            body: 'Post 1 Body',
          },
        ],
      },
    ],
  };
  test('should render correctly', () => {
    render(<Home letters={props.letters} />);
    expect(screen.getByText('Paulo')).toBeTruthy();
  });
});
