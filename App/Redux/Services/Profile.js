import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

export const ProfileApi = createApi({
  reducerPath: 'profile',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

  //   Profile GET API
  endpoints: builder => ({
    getUserProfile: builder.query({
      query: () => {
        return {
          url: 'profile',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token.auth_token._W}`,
          },
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useGetUserProfileQuery} = ProfileApi;
