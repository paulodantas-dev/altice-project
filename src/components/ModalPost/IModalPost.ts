import { Post } from 'types/Posts';

export interface IModalPost {
  onModalVisible: () => void;
  posts: Post[];
}
