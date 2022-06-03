import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Token from './Token';

console.log(Token.auth_token._W, "token--------------------------------")
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
            Authorization: `Bearer 9|lUFXA5ENCGYoBvIkbUI02KptRB2UAaHde5C6CeJ8`,
          },
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useGetArticlesQuery} = ArticleApi;
