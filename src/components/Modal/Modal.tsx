import { IModal } from './IModal';
import { ModalView } from './ModalView';

export const Modal = ({ onModalVisible, posts }: IModal): JSX.Element => {
  return <ModalView onModalVisible={onModalVisible} posts={posts} />;
};
