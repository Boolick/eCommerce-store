import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {LoginPage} from 'pages/LoginPage';
import {RegistrationPage} from 'pages/RegistrationPage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {CatalogPage} from 'pages/CatalogPage';
import {ProductPage} from 'pages/ProductPage';
import {UserPage} from 'pages/UserPage';
import {AboutUsPage} from 'pages/AboutUsPage';
import {CartPage} from 'pages/CartPage';

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  CATALOG = 'catalog',
  USER = 'user',
  NOT_FOUND = 'not_found',
  PRODUCT = 'product',
  ABOUT = 'about_us',
  CART = 'cart',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTRATION]: '/registration',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.PRODUCT]: '/product',
  [AppRoutes.USER]: '/user',
  [AppRoutes.ABOUT]: '/about_us',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
  [AppRoutes.REGISTRATION]: {
    path: RoutePath[AppRoutes.REGISTRATION],
    element: <RegistrationPage />,
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath[AppRoutes.CATALOG],
    element: <CatalogPage />,
  },
  [AppRoutes.USER]: {
    path: RoutePath[AppRoutes.USER],
    element: <UserPage />,
  },
  [AppRoutes.PRODUCT]: {
    path: RoutePath[AppRoutes.PRODUCT],
    element: <ProductPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutUsPage />,
  },
  [AppRoutes.CART]: {
    path: RoutePath[AppRoutes.CART],
    element: <CartPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
