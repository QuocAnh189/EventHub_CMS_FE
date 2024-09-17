'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import {
  LoginPayload,
  IParamsExternalLogin,
  ForgotPassPayload
} from '@shared/interfaces/auth/payload'

import { IAuth } from '@shared/interfaces/auth/model'
import { IUser } from '@shared/interfaces/user/model'

export const apiAuth = createApi({
  reducerPath: 'apiAuth',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  keepUnusedDataFor: 20,

  endpoints: (builder) => ({
    signIn: builder.mutation<IAuth, LoginPayload>({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => response.data
    }),

    signOut: builder.mutation<any, void>({
      query: () => ({
        url: `/auth/signout`,
        method: 'POST'
      })
    }),

    signInExternal: builder.mutation<IAuth, IParamsExternalLogin>({
      query: (params) => ({
        url: `/auth/external-login`,
        method: 'POST',
        params
      })
    }),

    externalAuthCallBack: builder.query<IAuth, void>({
      query: () => ({
        url: '/auth/external-auth-callback',
        method: 'GET'
      })
    }),

    refreshToken: builder.mutation<IAuth, void>({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'POST'
      })
    }),

    forgotPassword: builder.mutation<IAuth, ForgotPassPayload>({
      query: (data) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: data
      })
    }),

    resetPassword: builder.mutation<IAuth, void>({
      query: () => ({
        url: '/auth/reset-password',
        method: 'POST'
      })
    }),

    getProfile: builder.query<IUser, void>({
      query: () => ({
        url: '/auth/profile',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('token')!).accessToken
          }`
        }
      }),
      transformResponse: (response: any) => response.data
    })
  })
})

export const {
  useSignInMutation,
  useSignOutMutation,
  useSignInExternalMutation,
  useExternalAuthCallBackQuery,
  useRefreshTokenMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetProfileQuery
} = apiAuth
