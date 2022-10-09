import { IModalPost } from './ModalPost.types';
import { ModalPostView } from './ModalPostView';

export const ModalPost = ({ onModalVisible, posts }: IModalPost): JSX.Element => {
  return <ModalPostView onModalVisible={onModalVisible} posts={posts} />;
};
