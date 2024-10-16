import {Route, Routes} from 'react-router-dom';
import {FC, Suspense} from 'react';
import {PageLoader} from 'widgets/PageLoader/PageLoader';
import {routeConfig} from '../config/routeConfig';

const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({element, path}) => (
        <Route key={path} path={path} element={<>{element}</>} />
      ))}
    </Routes>
  </Suspense>
);

export {AppRouter};
