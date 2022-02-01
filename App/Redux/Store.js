import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from './Reducers/CounterSlice';
import LoginReducer from './Reducers/LoginReducer';
import ObjReducer from './Reducers/ObjReducer';
import UserDataReducer from './Reducers/UserDataReducer';

export default configureStore ({
    reducer: {
        // LIST OF REDUCERS
        counter : CounterSlice,
        login : LoginReducer,
        obj : ObjReducer,
        user_data : UserDataReducer
    }
})