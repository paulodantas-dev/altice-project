import { api } from 'services/api';

import { USERS } from 'config/endpoints';

import { User } from 'types/Users';

async function getUsers(): Promise<User[]> {
  return api
    .get(USERS)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      switch (error.response.status) {
        case 404:
          return alert('404 - Not Found');

        case 500:
          return alert('500 - Internal Server Error');

        default:
          return alert('Something went wrong');
      }
    });
}

export const UsersService = {
  getUsers,
};
