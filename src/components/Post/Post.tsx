import { IPost } from './IPost';
import { PostView } from './PostView';

export const Post = ({ post }: IPost): JSX.Element => {
  return <PostView post={post} />;
};
