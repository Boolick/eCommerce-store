import {FC} from 'react';
import {Header} from 'widgets/Header/Header';
import {Footer} from 'widgets/Footer/Footer';
import {AppRouter} from './providers/AppRouter';

export const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};
