// 'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// //type
// import { CreateCategoryPayload } from '@shared/interfaces/category/payload'

//interface
import { ICategory } from '@shared/interfaces/category/model'
import { IListData } from '@shared/interfaces/common'
import { IGetParam } from '@shared/interfaces/common/index'

export const apiCategory = createApi({
  reducerPath: 'apiCategory',
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
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    createCategory: builder.mutation<ICategory, FormData>({
      query: (data) => ({
        url: '/categories',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Category']
    }),

    getCategories: builder.query<IListData<ICategory[]>, IGetParam>({
      query: (params) => ({
        url: '/categories',
        method: 'GET',
        params
      }),
      providesTags: ['Category'],
      transformResponse: (response: any) => response.data
    }),

    getCategoryById: builder.query<ICategory, string>({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: 'GET'
      }),
      providesTags: ['Category'],
      transformResponse: (response: any) => response.data
    }),

    updateCategory: builder.mutation<ICategory, { id: string; data: FormData }>({
      query: ({ id, data }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Category'],
      transformResponse: (response: any) => response.data
    }),

    deleteCategory: builder.mutation<any, string>({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Category'],
      transformResponse: (response: any) => response.data
    })
  })
})

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = apiCategory
