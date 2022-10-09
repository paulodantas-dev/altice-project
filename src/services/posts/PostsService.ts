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

export const PostsService = {
  getPosts,
};
