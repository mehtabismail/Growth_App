import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

export const DiaperApi = createApi({
  reducerPath: 'diaper_log',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

//   DIAPER-LOG POST API
  endpoints: builder => ({
    createDiaperLog: builder.mutation({
      query: data => {
        console.log('new data : ', data);
        return {
          url: 'diaper-log',
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

export const { useCreateDiaperLogMutation } = DiaperApi;