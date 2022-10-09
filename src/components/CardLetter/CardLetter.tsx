import { useState } from 'react';

import { ICardLetter } from './CardLetter.types';
import { CardLetterView } from './CardLetterView';

export const CardLetter = ({ letter }: ICardLetter): JSX.Element => {
  const [isModalVisible, setIsModaVisible] = useState(false);

  const onModalVisible = () => {
    setIsModaVisible(!isModalVisible);
  };
  return (
    <CardLetterView
      letter={letter}
      onModalVisible={onModalVisible}
      isModalVisible={isModalVisible}
    />
  );
};
