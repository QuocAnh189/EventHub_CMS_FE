import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { IConversationParams } from '@shared/interfaces/conversation/payload'

export const apiConversation = createApi({
  reducerPath: 'apiConversation',
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
  tagTypes: ['Conversation', 'Message'],
  endpoints: (builder) => ({
    getConversationsByEventId: builder.query<any, string>({
      query: (eventId) => ({
        url: `/conversations/get-by-event/${eventId}`,
        method: 'GET'
      })
    }),

    getConversationsByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/conversations/get-by-user/${userId}`,
        method: 'GET'
      })
    }),

    getMessageByConversationId: builder.query<any, { conversationId: string; params: IConversationParams }>({
      query: ({ conversationId, params }) => ({
        url: `/conversations/${conversationId}/messages`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response?.data
      },
      providesTags: ['Conversation']
    })
  })
})

export const {
  useGetConversationsByEventIdQuery,
  useGetConversationsByUserIdQuery,
  useGetMessageByConversationIdQuery
} = apiConversation
