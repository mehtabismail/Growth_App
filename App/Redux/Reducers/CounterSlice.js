import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name : "Counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment : (state) => {
            state.count += 1; 
        },
        decrement: (state) => {
            state.count -=1;
        },
        incrementByAmount : (state, action) =>{
            state.count += action.payload;
        }
    }
});

export const {increment, decrement, incrementByAmount} = CounterSlice.actions;

export default CounterSlice.reducer;