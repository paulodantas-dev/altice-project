import { Spinner } from 'phosphor-react';

export const LoadingView = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Spinner className="animate-spin w-36 h-36" />
    </div>
  );
};
