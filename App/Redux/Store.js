// export const store = configureStore({
//   reducer: {
//     // LIST OF REDUCERS
//     // counter: CounterSlice,
//     // login: LoginReducer,
//   },
// });

import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import SleepingReducer from './Reducers/SleepingReducer';
import { AuthenticationApi } from './Services/Authentication';
import {BottleFeedApi} from './Services/BottleFeed';
import {PumpingApi} from './Services/Pumping';
import {SleepingApi} from './Services/SleepLog';
import {SolidFeedApi} from './Services/SolidFeed';

export const store = configureStore({
  reducer: {
    // LIST OF REDUCERS
    [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    user_data: SleepingReducer,
    [SleepingApi.reducerPath]: SleepingApi.reducer,
    user_data: SleepingReducer,
    [BottleFeedApi.reducerPath]: BottleFeedApi.reducer,
    user_data: SleepingReducer,
    [SolidFeedApi.reducerPath]: SolidFeedApi.reducer,
    user_data: SleepingReducer,
    [PumpingApi.reducerPath]: PumpingApi.reducer,
    user_data: SleepingReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      SleepingApi.middleware,
      BottleFeedApi.middleware,
      SolidFeedApi.middleware,
      PumpingApi.middleware,
      AuthenticationApi.middleware,
      
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
