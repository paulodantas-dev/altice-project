import { IPost } from './Post.types';

export const PostView = ({ post }: IPost): JSX.Element => {
  return (
    <div className="shadow-lg p-4 rounded-lg">
      <h1 className="uppercase text-indigo-500">{post.title}</h1>

      <p className="font-light text-sm text-slate-500">{post.body}</p>
    </div>
  );
};
