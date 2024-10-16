import {UserState} from 'entities/Customer';
import {CartState, cartApi} from 'features/cart';
import {userUpdateApi} from 'entities/Customer/model/api/userUpdateApi';
import {loginApi} from 'features/loginForm';
import {productsApi} from 'features/products';
import {signUpApi} from 'features/RegisterForm';

export type LoginApiReducerPath = typeof loginApi.reducerPath;

export interface StateSchema {
  user: UserState;
  cart: CartState;

  [loginApi.reducerPath]: ReturnType<typeof loginApi.reducer>;
  [signUpApi.reducerPath]: ReturnType<typeof signUpApi.reducer>;
  [userUpdateApi.reducerPath]: ReturnType<typeof userUpdateApi.reducer>;
  [productsApi.reducerPath]: ReturnType<typeof productsApi.reducer>;
  [cartApi.reducerPath]: ReturnType<typeof cartApi.reducer>;
}
