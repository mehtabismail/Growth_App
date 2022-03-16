import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const ChildReducer = createSlice({
    name : "children",
    initialState: {
        childList: null,
        currentChild: null,
    },
    reducers: {
        setChildList : (state, action) =>{
            state.currentUser = action.payload;
        },
        setCurrentChild : (state, action) =>{
            state.token = action.payload;
        }
    }
});

export const {setChildList, setCurrentChild} = ChildReducer.actions;

export default ChildReducer.reducer;

