// export const store = configureStore({
//   reducer: {
//     // LIST OF REDUCERS
//     // counter: CounterSlice,
//     // login: LoginReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import SleepingReducer from './Reducers/SleepingReducer'
import { SleepingApi } from './Services/SleepLog'

export const store = configureStore({
  reducer: {
    // LIST OF REDUCERS
    [SleepingApi.reducerPath]: SleepingApi.reducer,
    user_data: SleepingReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SleepingApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)