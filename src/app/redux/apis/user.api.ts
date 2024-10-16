import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { IChangePasswordPayload } from '@shared/interfaces/user/payload'

//interface
import { IUser } from '@shared/interfaces/user/model'

export const apiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['User', 'Event'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: '/users',
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getUserById: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (data) => ({
        url: '/users',
        method: 'GET',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    updateUser: builder.mutation<IUser, any>({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: 'PUT',
        body: data
      })
    }),

    changePassword: builder.mutation<any, IChangePasswordPayload>({
      query: (data) => ({
        url: `/users/${data.userId}/change-password`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    getFollowerByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/followers`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getFollowingByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/followers`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    followUser: builder.mutation<any, string>({
      query: (followedUserId) => ({
        url: `/users/follow/${followedUserId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['User']
    }),

    unFollowUser: builder.mutation<any, string>({
      query: (followedUserId) => ({
        url: `/users/unfollow/${followedUserId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['User']
    })
  })
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
  useGetFollowerByUserIdQuery,
  useGetFollowingByUserIdQuery,
  useFollowUserMutation,
  useUnFollowUserMutation
} = apiUser
