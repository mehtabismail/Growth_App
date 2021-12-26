import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const ObjReducer = createSlice({
    name : "Counter",
    initialState: {
        count: []
    },
    reducers: {
        setEmail : (state, action) =>{
            state.count = action.payload;
        }
    }
});

export const {setEmail} = ObjReducer.actions;

export default ObjReducer.reducer;

