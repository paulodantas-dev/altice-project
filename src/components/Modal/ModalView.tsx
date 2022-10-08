import { X } from 'phosphor-react';

import { Post } from 'components/Post/Post';

import { IModal } from './IModal';

export const ModalView = ({ onModalVisible, posts }: IModal): JSX.Element => {
  return (
    <div className="absolute overflow-hidden top-0 left-0 w-full h-screen bg-black/75 flex items-center justify-center z-50">
      <div className="bg-white w-[560px] h-[560px] rounded-2xl flex flex-col">
        <header className="flex items-center justify-between p-4">
          <h1 className="text-indigo-900 uppercase text-3xl">Posts</h1>
          <X className="cursor-pointer" onClick={onModalVisible} />
        </header>
        <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 justify-between">
          {posts.map((post) => (
            <div key={post.id} className="">
              <Post post={post} />
            </div>
          ))}
        </main>
        <footer className="flex justify-end p-4 uppercase">POSTS: {posts.length}</footer>
      </div>
    </div>
  );
};
