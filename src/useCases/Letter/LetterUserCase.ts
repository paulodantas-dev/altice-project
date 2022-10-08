import { PostsService } from 'services/posts/PostsService';
import { UsersService } from 'services/users/UsersService';

import { Letter } from 'types/Letter';

async function execute(): Promise<Letter[]> {
  const users = await UsersService.getUsers();
  const posts = await PostsService.getPosts();

  const Letter = users.map((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    return {
      ...user,
      posts: userPosts,
    };
  });

  return Letter;
}

export const LetterUseCase = {
  execute,
};
