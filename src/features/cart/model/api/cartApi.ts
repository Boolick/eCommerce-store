import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'shared/const/client';
import {StateSchema} from 'shared/types/StateSchema';
import {CartApiResponse, CartCreateResponse} from '../types/interfaces';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
      const state = getState() as StateSchema;
      const {token} = state.user;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCart: builder.query<CartApiResponse, void>({
      query: () => '/me/carts',
    }),
    createCart: builder.mutation<CartCreateResponse, {currency: string}>({
      query: (body) => ({
        url: '/me/carts',
        method: 'POST',
        body,
      }),
    }),
    checkCartExists: builder.query<boolean, string>({
      query: (cartId) => ({
        url: `/me/carts/${cartId}`,
        method: 'HEAD',
      }),
      transformResponse: (_response: unknown, meta) => meta?.response?.status === 200,
    }),
  }),
});

export const {useGetCartQuery, useCreateCartMutation, useCheckCartExistsQuery} = cartApi;
