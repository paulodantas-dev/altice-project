import { Post } from 'types/Posts';

export interface IModal {
  onModalVisible: () => void;
  posts: Post[];
}
