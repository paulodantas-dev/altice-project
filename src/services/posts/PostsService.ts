import { api } from 'services/api';

import { POSTS } from 'config/endpoints';

import { Post } from 'types/Posts';

async function getPosts(): Promise<Post[]> {
  return api
    .get(POSTS)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export const PostsService = {
  getPosts,
};
