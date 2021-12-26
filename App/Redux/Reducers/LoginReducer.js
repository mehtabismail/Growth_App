import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const LoginReducer = createSlice({
    name : "Login",
    initialState: {
        loginApiData: ["hello"]
    },
    reducers: {
        setApiData : (state, action) =>{
            state.loginApiData = action.payload;
        }
    }
});

export const {setApiData} = LoginReducer.actions;

export default LoginReducer.reducer;

