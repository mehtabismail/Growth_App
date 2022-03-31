import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const LoginReducer = createSlice({
    name : "Login",
    initialState: {
        currentUser: null,
        token: null,
    },
    reducers: {
        setCurrentUser : (state, action) =>{
            state.currentUser = action.payload;
            console.log("user saved in redux : ", state.currentUser)
        },
        setToken : (state, action) =>{
            state.token = action.payload;
        }
    }
});

export const {setCurrentUser, setToken} = LoginReducer.actions;

export default LoginReducer.reducer;

