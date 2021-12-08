import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from './Reducers/CounterSlice';

export default configureStore ({
    reducer: {
        // LIST OF REDUCERS
        counter : CounterSlice,

    }
})