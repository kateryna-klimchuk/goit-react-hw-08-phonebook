import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContact: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    getMaterialById: builder.query({
      query: contactId => `/contacts/${contactId}`,
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => {
        return { url: `/contacts/${contactId}`, method: 'DELETE' };
      },
      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: contact => {
        return {
          url: '/contacts',
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: ['contacts'],
    }),
    editContact: builder.mutation({
      query: (contact, contactId) => {
        return {
          url: `/contacts/${contactId}`,
          method: 'PATCH',
          body: contact,
        };
      },
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useEditContactMutation,
  useGetMaterialByIdQuery,
} = contactsApi;
