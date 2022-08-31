import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    // для работы currentUser 
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // useSignupMutation
    signup: builder.mutation({
      query: (payload) => ({
        url: '/users/signup',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    // useLoginMutation    ?????
    login: builder.mutation({
      query: (payload) => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    // useLogoutMutation
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),

    // useCurrentUserQuery
    currentUser: builder.query({
      query: () => '/users/current',
    }),
  }),
});


export const { useSignupMutation, useLoginMutation, useLogoutMutation, useCurrentUserQuery } =
  userApi;