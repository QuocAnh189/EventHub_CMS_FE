import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

//api
import { apiAuth } from './apis/auth.api'

const store = configureStore({
  reducer: {
    [apiAuth.reducerPath]: apiAuth.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat([apiAuth.middleware])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
