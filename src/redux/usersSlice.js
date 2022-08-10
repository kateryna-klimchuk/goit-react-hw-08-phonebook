import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => `users/current`,
      providesTags: ['User'],
    }),
    addUser: builder.mutation({
      query: values => ({
        url: 'users/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: values => ({
        url: 'users/login',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    logOutUser: builder.mutation({
      query: values => ({
        url: 'users/logout',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    // deleteContact: builder.mutation({
    //   query: id => ({
    //     url: `contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['User'],
    // }),
  }),
});

export const {
  useGetUserQuery,
  useAddUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
  // useDeleteContactMutation,
} = userApi;
