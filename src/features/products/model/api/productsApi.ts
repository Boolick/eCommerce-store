import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'shared/const/client';
import {StateSchema} from 'app/providers/StoreProvider';
import {Product, ProductResponse} from '../types/interfaces';

export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, {getState}) => {
      const state = getState() as StateSchema;
      const {token} = state.user;
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: `/product-projections`,
        method: 'GET',
      }),
      transformResponse: (response: {results: ProductResponse[]}) =>
        response.results.map((product: ProductResponse) => ({
          id: product.id,
          name: product.name?.['en-GB'],
          title: product.name?.['en-GB'],
          description: product.description?.['en-GB'] || '',
          imgSrc: product.masterVariant.images[0]?.url || '',
          price:
            // eslint-disable-next-line max-len, no-unsafe-optional-chaining
            `${product.masterVariant.prices[0]?.value.centAmount / 100} ${product.masterVariant.prices[0]?.value.currencyCode}` ||
            '',
        })),
    }),
  }),
});

export const {useGetProductsQuery} = productsApi;
