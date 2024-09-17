'use client'
import React, { PropsWithChildren } from 'react'

//store
import { Provider } from 'react-redux'
import store from '@app/redux/store'

const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
