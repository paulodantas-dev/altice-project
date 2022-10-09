import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { WEBSITE } from 'config/constant';

import { CardLetter } from '../CardLetter';

describe('CardLetter', () => {
  const props = {
    letters: {
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
  };
  test('should render correctly', () => {
    render(<CardLetter letter={props.letters} />);

    expect(screen.getByText('Paulo')).toBeTruthy();
  });

  test('should render correctly ModalPost when isModalVisible is true', async () => {
    render(<CardLetter letter={props.letters} />);
    await userEvent.click(screen.getByText('See posts'));
    await screen.findByText('Posts');
    expect(screen.getByText('Post 1')).toBeTruthy();
  });
});
