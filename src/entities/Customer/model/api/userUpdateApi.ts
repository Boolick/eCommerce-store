import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'shared/const/client';
import {CustomerUpdateRequest, ChangePasswordRequest} from '../types/types';
import {UserData} from '../types/userSchema';

export const userUpdateApi = createApi({
  reducerPath: 'userUpdateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    updateUser: builder.mutation<UserData, CustomerUpdateRequest>({
      query: ({id, token, version, actions}) => ({
        url: `/customers/${id}`,
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          version,
          actions,
        }),
      }),
    }),
    changePassword: builder.mutation<UserData, ChangePasswordRequest>({
      query: ({id, token, version, currentPassword, newPassword}) => ({
        url: `/customers/password`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id,
          version,
          currentPassword,
          newPassword,
        }),
      }),
    }),
  }),
});
export const {useUpdateUserMutation, useChangePasswordMutation} = userUpdateApi;
