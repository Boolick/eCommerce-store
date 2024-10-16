import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {loginApi} from 'features/loginForm';
import {signUpApi} from 'features/RegisterForm';
import {userUpdateApi} from 'entities/Customer/model/api/userUpdateApi';
import {productsApi} from 'features/products';
import {StateSchema} from 'shared/types/StateSchema';
import {cartApi} from 'features/cart';
import tokenMiddleware from 'features/middlewares/tokenMIddleware';
import userReducer from '../../../../entities/Customer/model/slice/userSlice';
import cartReducer from '../../../../features/cart/model/slice/cartSlice';

export function createReduxStore(initialState?: StateSchema): ReturnType<typeof configureStore> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    cart: cartReducer,
    user: userReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
    [userUpdateApi.reducerPath]: userUpdateApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  };

  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        loginApi.middleware,
        signUpApi.middleware,
        userUpdateApi.middleware,
        productsApi.middleware,
        cartApi.middleware,
        tokenMiddleware
      ),
    devTools: true,
    preloadedState: initialState,
  });
}
