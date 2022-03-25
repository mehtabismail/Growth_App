import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

export const SolidFeedApi = createApi({
  reducerPath: 'solid_feed',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

//   SLEEPING-LOG POST API
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
  }),
});

export const { useCreateSolidFeedMutation } = SolidFeedApi;