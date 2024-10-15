import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiCommand = createApi({
  reducerPath: 'apiCommand',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getCommandInFunction: builder.query<any, void>({
      query: (functionId) => ({
        url: `/commands/get-in-function/${functionId}`,
        method: 'GET'
      })
    }),
    getCommandNotInFunction: builder.query<any, void>({
      query: (functionId) => ({
        url: `/commands/get-not-in-function/${functionId}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetCommandInFunctionQuery, useGetCommandNotInFunctionQuery } = apiCommand
