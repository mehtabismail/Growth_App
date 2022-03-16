import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const PumpingApi = createApi({
  reducerPath: 'pumping',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://grow-backend.herokuapp.com/api/',
  }),

//   SLEEPING-LOG POST API
  endpoints: builder => ({
    createPumping: builder.mutation({
      query: data => {
        console.log('new data : ', data);
        return {
          url: 'pumping',
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

export const { useCreatePumpingMutation } = PumpingApi;