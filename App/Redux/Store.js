import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {AuthenticationApi} from './Services/Authentication';
import {BottleFeedApi} from './Services/BottleFeed';
import {PumpingApi} from './Services/Pumping';
import {SleepingApi} from './Services/SleepLog';
import {SolidFeedApi} from './Services/SolidFeed';
import LoginReducer from './Reducers/LoginReducer';
import SleepingReducer from './Reducers/SleepingReducer';
import ChildReducer from './Reducers/ChildReducer';
import { ProfileApi } from './Services/Profile';
import { DiaperApi } from './Services/Diaper';
import { ArticleApi } from './Services/Resources';
import { CommunityForumApi } from './Services/Community';
import { ForumApi } from './Services/Forum';

export const store = configureStore({
  reducer: {
    // LIST OF REDUCERS
    login: LoginReducer,
    user_data: SleepingReducer,
    children: ChildReducer,

    [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    [SleepingApi.reducerPath]: SleepingApi.reducer,
    [BottleFeedApi.reducerPath]: BottleFeedApi.reducer,
    [SolidFeedApi.reducerPath]: SolidFeedApi.reducer,
    [PumpingApi.reducerPath]: PumpingApi.reducer,
    [ProfileApi.reducerPath]: ProfileApi.reducer,
    [DiaperApi.reducerPath]: DiaperApi.reducer,
    [ArticleApi.reducerPath]: ArticleApi.reducer,
    [CommunityForumApi.reducerPath]: CommunityForumApi.reducer,
    [ForumApi.reducerPath]: ForumApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      SleepingApi.middleware,
      BottleFeedApi.middleware,
      SolidFeedApi.middleware,
      PumpingApi.middleware,
      AuthenticationApi.middleware,
      ProfileApi.middleware,
      DiaperApi.middleware,
      ArticleApi.middleware,
      CommunityForumApi.middleware,
      ForumApi.middleware,
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
