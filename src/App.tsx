import { useEffect, useState } from 'react';

import { Home } from 'pages/Home/Home';
import { LetterUseCase } from 'useCases/Letter/LetterUserCase';

import { Loading } from 'components/Loading/Loading';

import { Letter } from 'types/Letter';

import './global.css';

export const App = (): JSX.Element => {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      const result = await LetterUseCase.execute();
      setLetters(result);
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Home letters={letters} />
        </>
      )}
    </div>
  );
};
