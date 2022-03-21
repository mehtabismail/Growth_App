import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

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
            Authorization: 'Bearer 3|bMezWFXT4McJHIJTRl897ZQf3sopb8GD5B5RtuXy',
          },
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useGetUserProfileQuery} = ProfileApi;
