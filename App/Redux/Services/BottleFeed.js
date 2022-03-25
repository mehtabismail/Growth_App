import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

export const BottleFeedApi = createApi({
  reducerPath: 'bootle_feed',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

//   SLEEPING-LOG POST API
  endpoints: builder => ({
    createBottleFeed: builder.mutation({
      query: data => {
        console.log('Token  : ', Token.auth_token._W);
        return {
          url: 'bottle-feed',
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

export const { useCreateBottleFeedMutation } = BottleFeedApi;