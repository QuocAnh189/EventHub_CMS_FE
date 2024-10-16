import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { IRole } from '@shared/interfaces/role/model'

export const apiRole = createApi({
  reducerPath: 'apiRole',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Role'],
  endpoints: (builder) => ({
    addFunctionToRole: builder.mutation<IRole, { roleId: string; functionId: string }>({
      query: ({ roleId, functionId }) => ({
        url: `/roles/${roleId}/add-function/${functionId}`,
        method: 'POST'
      }),
      invalidatesTags: ['Role']
    }),

    removeFunctionFromRole: builder.mutation<IRole, { roleId: string; functionId: string }>({
      query: ({ roleId, functionId }) => ({
        url: `/roles/${roleId}/remove-function/${functionId}`,
        method: 'POST'
      }),
      invalidatesTags: ['Role']
    })
  })
})

export const { useAddFunctionToRoleMutation, useRemoveFunctionFromRoleMutation } = apiRole
