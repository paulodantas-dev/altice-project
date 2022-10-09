import { IPost } from './Post.types';
import { PostView } from './PostView';

export const Post = ({ post }: IPost): JSX.Element => {
  return <PostView post={post} />;
};
