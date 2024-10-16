import {lazy} from 'react';

// включить эту строку в реальном проекте
export const MainPageAsync = lazy(() => import('./MainPage'));

// только для демонстрации лоадера, удалить в готовом проекте
// export const MainPageAsync = lazy(
//   () =>
//     new Promise((resolve) => {
//       // @ts-expect-error demonstration
//       setTimeout(() => resolve(import('./MainPage')), 1500);
//     })
// );
