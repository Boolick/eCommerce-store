import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, CLIENT_SECRET, CLIENT_ID, AUTH_URL} from 'shared/const/client';
import {LoginErrorMessage} from '../types/types';
import {LoginRequest, LoginResponse, PreLoginResponse} from '../types/loginSchema';
import {setUser, setToken, setError} from '../../../../entities/Customer/model/slice/userSlice';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<PreLoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'rs-school_rss-commerce/customers/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
        body: new URLSearchParams({
          username: credentials.username,
          password: credentials.password,
          grant_type: 'password',
        }),
      }),
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          const token = data.access_token;

          if (token) {
            // Запрос данных пользователя
            const userResponse = await dispatch(
              loginApi.endpoints.getUser.initiate(token)
            ).unwrap();
            // Сохранение данных пользователя и токена в
            dispatch(setToken(token));
            dispatch(setUser({user: userResponse}));
          }
        } catch (error) {
          const errorMessage = error as LoginErrorMessage;
          dispatch(setError(`${errorMessage.data?.message}`));
        }
      },
    }),
    getUser: builder.query<LoginResponse, string>({
      query: (token) => ({
        url: `${BASE_URL}/me`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {useLoginMutation, useLazyGetUserQuery} = loginApi;
