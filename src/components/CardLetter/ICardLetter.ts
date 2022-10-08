import { Letter } from 'types/Letter';

export interface ICardLetter {
  letter: Letter;
}

export interface ICardLetterView {
  letter: Letter;
  isModalVisible: boolean;
  onModalVisible: () => void;
}
