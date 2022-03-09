import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from './Reducers/CounterSlice';
import LoginReducer from './Reducers/LoginReducer';
import ObjReducer from './Reducers/ObjReducer';
import UserDataReducer from './Reducers/UserDataReducer';
import PostsReducer from './Reducers/PostsReducer';
import UserData from './Reducers/UserData';

export default configureStore({
  reducer: {
    // LIST OF REDUCERS
    counter: CounterSlice,
    login: LoginReducer,
    obj: ObjReducer,
    user_data: UserData,
    Posts_Reducer: PostsReducer,
  },
});
