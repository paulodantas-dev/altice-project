import { HomeView } from './HomeView';
import { IHome } from './IHome';

export const Home = ({ letters }: IHome): JSX.Element => {
  return <HomeView letters={letters} />;
};
