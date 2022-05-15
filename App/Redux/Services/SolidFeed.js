import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

export const SolidFeedApi = createApi({
  reducerPath: 'solid_feed',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

//   Solid-Feed POST API
  endpoints: builder => ({
    createSolidFeed: builder.mutation({
      query: data => {
        console.log('new data : ', data);
        return {
          url: 'solid-feed',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token.auth_token._W}`,
          },
          body: data,
          method: 'POST',
        };
      },
    }),

    getSolidFeed: builder.query({
      query: data => {
        return {
          url: 'solid-feed-category',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token.auth_token._W}`,
          },
          body: data,
          method: 'GET',
        }
      }
    })
  }),
});

export const { useCreateSolidFeedMutation, useGetSolidFeedQuery } = SolidFeedApi;


