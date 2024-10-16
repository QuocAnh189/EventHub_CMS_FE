import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { ApiResponse } from '@shared/interfaces/common'
import { IPermissionScreen, IRolePermission } from '@shared/interfaces/permission/model'

export const apiPermission = createApi({
  reducerPath: 'apiPermission',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken
      headers.set('Content-Type', 'application/json')

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Permission'],
  endpoints: (builder) => ({
    getPermissions: builder.query<IPermissionScreen[], void>({
      query: () => ({
        url: '/permissions',
        method: 'GET'
      }),
      providesTags: ['Permission'],
      transformResponse: (response: ApiResponse<IPermissionScreen[]>) => response.data
    }),

    getPermissionsByRole: builder.query<IRolePermission[], void>({
      query: () => ({
        url: '/permissions/roles',
        method: 'GET'
      }),
      providesTags: ['Permission'],
      transformResponse: (response: ApiResponse<IRolePermission[]>) => response.data
    }),

    getPermissionsByUserId: builder.query<IRolePermission[], string>({
      query: (userId) => ({
        url: `/permissions/get-by-user/${userId}`,
        method: 'GET'
      }),
      providesTags: ['Permission'],
      transformResponse: (response: ApiResponse<IRolePermission[]>) => response.data
    })
  })
})

export const { useGetPermissionsQuery, useGetPermissionsByRoleQuery, useGetPermissionsByUserIdQuery } = apiPermission
