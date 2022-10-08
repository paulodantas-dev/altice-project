import { useState } from 'react';

import { CardLetterView } from './CardLetterView';
import { ICardLetter } from './ICardLetter';

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
