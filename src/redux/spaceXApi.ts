import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Launch } from '../components/spacex/types';

export const spaceXApi = createApi({
  reducerPath: 'spaceXApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v2/' }),
  endpoints: (builder) => ({
    getLaunches: builder.query<Launch[], string>({
      query: () => `launches`
    })
  })
});

export const { useGetLaunchesQuery } = spaceXApi;
