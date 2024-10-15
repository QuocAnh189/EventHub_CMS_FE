import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

//api
import { apiAuth } from './apis/auth.api'
import { apiCategory } from './apis/category.api'
import { apiCommand } from './apis/command.api'
import { apiEvent } from './apis/event.api'
import { apiMessage } from './apis/message.api'
import { apiPayment } from './apis/payment.api'
import { apiConversation } from './apis/conversation.api'
import { apiRole } from './apis/roles.api'
import { apiTicket } from './apis/ticket.api'
import { apiUser } from './apis/user.api'
import { apiPermission } from './apis/permission.api'
import { apiFunction } from './apis/function.api'

const store = configureStore({
  reducer: {
    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiCategory.reducerPath]: apiCategory.reducer,
    [apiCommand.reducerPath]: apiCommand.reducer,
    [apiEvent.reducerPath]: apiEvent.reducer,
    [apiMessage.reducerPath]: apiMessage.reducer,
    [apiPayment.reducerPath]: apiPayment.reducer,
    [apiConversation.reducerPath]: apiConversation.reducer,
    [apiRole.reducerPath]: apiRole.reducer,
    [apiTicket.reducerPath]: apiTicket.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    [apiPermission.reducerPath]: apiPermission.reducer,
    [apiFunction.reducerPath]: apiFunction.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat([
      apiAuth.middleware,
      apiCategory.middleware,
      apiCommand.middleware,
      apiEvent.middleware,
      apiMessage.middleware,
      apiPayment.middleware,
      apiConversation.middleware,
      apiRole.middleware,
      apiTicket.middleware,
      apiUser.middleware,
      apiPermission.middleware,
      apiFunction.middleware
    ])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
