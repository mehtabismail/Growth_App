import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const AuthenticationApi = createApi({
  reducerPath: 'authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

//   SLEEPING-LOG POST API
  endpoints: builder => ({
    SignIn: builder.mutation({
      query: data => {
        console.log('new data : ', data);
        return {
          url: 'login',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: data,
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useSignInMutation } = AuthenticationApi;