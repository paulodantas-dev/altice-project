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
      throw error;
    });
}

export const UsersService = {
  getUsers,
};
