import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

console.log(Token, "token")
export const ArticleApi = createApi({
  reducerPath: 'article',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

  //   ARTICLE GET API
  endpoints: builder => ({
    getArticles: builder.query({
      query: () => {
        return {
          url: 'article',
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

export const {useGetArticlesQuery} = ArticleApi;
