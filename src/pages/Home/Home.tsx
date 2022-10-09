import { IHome } from './Home.types';
import { HomeView } from './HomeView';

export const Home = ({ letters }: IHome): JSX.Element => {
  return <HomeView letters={letters} />;
};
