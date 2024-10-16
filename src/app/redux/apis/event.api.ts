import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import {
  IFavoriteEventPayload,
  IParamsEvent,
  IParamsReview,
  IReviewEventPayload
} from '@shared/interfaces/event/payload'

//interface
import { IEvent } from '@shared/interfaces/event/model'
import queryString from 'query-string'

export const apiEvent = createApi({
  reducerPath: 'apiEvent',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    paramsSerializer: (params: Record<string, unknown>) => queryString.stringify(params, { arrayFormat: 'none' }),
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 2,

  tagTypes: ['Event', 'Review'],
  endpoints: (builder) => ({
    getEvents: builder.query<any, IParamsEvent | any>({
      query: (params) => ({
        url: '/events',
        method: 'GET',
        params
      }),
      providesTags: ['Event'],
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    getEventById: builder.query<IEvent, string>({
      query: (eventId) => ({
        url: `/events/${eventId}`,
        method: 'GET'
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Event']
    }),

    createEvent: builder.mutation<IEvent, FormData>({
      query: (data) => ({
        url: '/events',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    updateEvent: builder.mutation<IEvent, FormData>({
      query: (data) => ({
        url: `/events/${data.get('id')}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    deleteEvent: builder.mutation<any, string>({
      query: (eventId) => ({
        url: `/events/${eventId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Event']
    }),

    getEventByCreator: builder.query<any, void>({
      query: () => ({
        url: `/events/get-created-events`,
        method: 'GET'
      }),
      providesTags: ['Event']
    }),

    deletePermanentEvent: builder.mutation<any, string>({
      query: (eventId) => ({
        url: `/events/delete-permanently/${eventId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Event']
    }),

    restoreEvent: builder.mutation<any, string[]>({
      query: (eventIds) => ({
        url: `/events/restore`,
        method: 'PATCH',
        body: eventIds
      }),
      invalidatesTags: ['Event']
    }),

    getTrashEvents: builder.query<any, void>({
      query: () => ({
        url: `/events/get-deleted-events`,
        method: 'GET'
      }),
      providesTags: ['Event']
    }),

    addReview: builder.mutation<any, { eventId: string; data: IReviewEventPayload }>({
      query: ({ eventId, data }) => ({
        url: `/events/${eventId}/reviews`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Review']
    }),

    getReviewsByEventId: builder.query<any, IParamsReview>({
      query: (params) => ({
        url: `/events/${params.eventId}/reviews`,
        method: 'GET',
        params
      }),
      providesTags: ['Review'],
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    getReviewById: builder.query<any, { eventId: string; reviewId: string }>({
      query: ({ eventId, reviewId }) => ({
        url: `/events/${eventId}/reviews/${reviewId}`,
        method: 'GET'
      }),
      providesTags: ['Review']
    }),

    updateReview: builder.mutation<any, { eventId: string; reviewId: string; data: IReviewEventPayload }>({
      query: ({ eventId, reviewId, data }) => ({
        url: `/events/${eventId}/reviews/${reviewId}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Review']
    }),

    deleteReview: builder.mutation<any, { eventId: string; reviewId: string }>({
      query: ({ eventId, reviewId }) => ({
        url: `/events/${eventId}/reviews/${reviewId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Review']
    }),

    favouriteEvent: builder.mutation<any, IFavoriteEventPayload>({
      query: (data) => ({
        url: `/events/favourites/${data.eventId}`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    unfavouriteEvent: builder.mutation<any, IFavoriteEventPayload>({
      query: (data) => ({
        url: `/events/favourites/${data.eventId}`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    getFavouriteEvent: builder.query<any, void>({
      query: () => ({
        url: `/events/get-favourite-events`,
        method: 'GET'
      }),
      providesTags: ['Event']
    }),

    makeEventPrivate: builder.mutation<any, string[]>({
      query: (eventIds) => ({
        url: `/events/move-events-private`,
        method: 'PATCH',
        body: eventIds
      }),
      invalidatesTags: ['Event']
    }),

    makeEventPublic: builder.mutation<any, string[]>({
      query: (eventIds) => ({
        url: `/events/move-events-public`,
        method: 'PATCH',
        body: eventIds
      }),
      invalidatesTags: ['Event']
    })
  })
})

export const {
  useGetEventsQuery,
  useGetEventByIdQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useGetEventByCreatorQuery,
  useDeletePermanentEventMutation,
  useRestoreEventMutation,
  useGetTrashEventsQuery,
  useAddReviewMutation,
  useGetReviewsByEventIdQuery,
  useGetReviewByIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useFavouriteEventMutation,
  useUnfavouriteEventMutation,
  useGetFavouriteEventQuery,
  useMakeEventPrivateMutation,
  useMakeEventPublicMutation
} = apiEvent
