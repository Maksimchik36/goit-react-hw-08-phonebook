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
  tagTypes: ['User', 'Contact'],
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

    // useLoginMutation    
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


    // useAllContactsQuery
    allContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    // useNewContactMutation    
    newContact: builder.mutation({
      query: (payload) => ({
        url: '/contacts',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Contact'],
    }),

    // useDeleteContactMutation    
    deleteContact: builder.mutation({
      query: (payload) => ({
        url: `/contacts/${payload}`,  // conyactId or payload ????
        method: 'DELETE',
        // body: payload,
      }),
      invalidatesTags: ['Contact'],
    }),

    // useEditContactMutation    
    editContact: builder.mutation({
      query: (payload) => ({
        url: '/contacts/{contactId}',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});


export const { useSignupMutation, useLoginMutation, useLogoutMutation, useCurrentUserQuery, useAllContactsQuery, useNewContactMutation, useDeleteContactMutation, useEditContactMutation } =
  userApi;