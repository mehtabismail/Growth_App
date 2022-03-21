import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const DiaperApi = createApi({
  reducerPath: 'diaper_log',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

//   SLEEPING-LOG POST API
  endpoints: builder => ({
    createDiaperLog: builder.mutation({
      query: data => {
        console.log('new data : ', data);
        return {
          url: 'diaper-log',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer 3|bMezWFXT4McJHIJTRl897ZQf3sopb8GD5B5RtuXy',
          },
          body: data,
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useCreateDiaperLogMutation } = DiaperApi;