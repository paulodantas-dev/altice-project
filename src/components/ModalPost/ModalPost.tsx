import { IModalPost } from './IModalPost';
import { ModalPostView } from './ModalPostView';

export const ModalPost = ({ onModalVisible, posts }: IModalPost): JSX.Element => {
  return <ModalPostView onModalVisible={onModalVisible} posts={posts} />;
};
