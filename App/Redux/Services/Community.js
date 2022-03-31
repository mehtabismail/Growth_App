import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

export const CommunityForumApi = createApi({
  reducerPath: 'community_forum',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

  //   forum-category GET API
  endpoints: builder => ({
    getForumCategory: builder.query({
      query: () => {
        return {
          url: 'forum-category',
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

export const {useGetForumCategoryQuery} = CommunityForumApi;
