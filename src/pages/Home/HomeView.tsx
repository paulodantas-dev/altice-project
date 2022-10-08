import { CardLetter } from 'components/CardLetter/CardLetter';

import { IHome } from './IHome';

export const HomeView = ({ letters }: IHome): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-auto">
      <h1 className="text-7xl uppercase text-indigo-900 tracking-widest">Letters</h1>
      <div className="grid grid-cols-2 gap-32 p-4 mt-4 ">
        {letters.map((letter) => (
          <CardLetter key={letter.id} letter={letter} />
        ))}
      </div>
    </div>
  );
};
