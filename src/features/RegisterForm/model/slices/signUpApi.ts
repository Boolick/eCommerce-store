import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, CLIENT_ID, CLIENT_SECRET, AUTH_URL} from 'shared/const/client';
import {StateSchema} from 'shared/types/StateSchema';
import {SignUpRequest, SignUpResponse, TokenResponse} from '../types/SignUpSchema';

export async function fetchToken(): Promise<TokenResponse> {
  const response = await fetch(`${AUTH_URL}token?grant_type=client_credentials`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.json();
}

export const signUpApi = createApi({
  reducerPath: 'signUpApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, {getState}) => {
      let {token} = (getState() as StateSchema).user;
      if (!token) {
        const tokenResponse = await fetchToken();
        token = tokenResponse.access_token;
      }
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (data) => ({
        url: '/customers',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {useSignUpMutation} = signUpApi;
