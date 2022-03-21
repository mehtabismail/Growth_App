import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const ChildReducer = createSlice({
    name : "children",
    initialState: {
        childList: null,
        currentChild: null,
        children: null
    },
    reducers: {
        setChildList : (state, action) =>{
            state.childList = action.payload;
            console.log("child list dispatched ")
        },
        setCurrentChild : (state, action) =>{
            state.currentChild = action.payload;
            console.log("current child dispatched ")
        },
        setChildren : (state, action) =>{
            console.log("setChildren called");
            state.children = action.payload;
            console.log("children dispatched  ")
            console.log("children : ",state.children);
        }
    }
});

export const {setChildList, setCurrentChild, setChildren} = ChildReducer.actions;

export default ChildReducer.reducer;

