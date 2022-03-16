import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const BottleFeedApi = createApi({
  reducerPath: 'bootle_feed',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

//   SLEEPING-LOG POST API
  endpoints: builder => ({
    createBottleFeed: builder.mutation({
      query: data => {
        console.log('new data : ', data);
        return {
          url: 'bottle-feed',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer 7|kWcDNvzMDQrIznMSUBE1osrjSclZKoRTAa5VKYnh',
          },
          body: data,
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useCreateBottleFeedMutation } = BottleFeedApi;