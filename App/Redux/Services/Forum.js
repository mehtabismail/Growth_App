import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

export const ForumApi = createApi({
  reducerPath: 'forum',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

  //   forum-category GET API
  endpoints: builder => ({
    getForum: builder.query({
      query: (forum_id) => {
        return {
          url: `forum/${forum_id}/questions`,
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

export const {useGetForumQuery} = ForumApi;
