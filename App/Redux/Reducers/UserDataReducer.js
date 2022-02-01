import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

export const userData = createAsyncThunk('User_Data/userData', async () => {
  console.log('thunk : ');
  // return fetch('http://grow-backend.herokuapp.com/api/profile', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer 120|IXMyAylsLKvxHiJgPulx7L2ffeFRIFVO2ZwJs7Vw',
  //   },
  // })
  //   .then(res => res.json())
  //   .then(response => console.log(response));

  const response = await fetch(
    'http://grow-backend.herokuapp.com/api/profile',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer 120|IXMyAylsLKvxHiJgPulx7L2ffeFRIFVO2ZwJs7Vw',
      },
    },
  ).then(res => res.json());
  console.log(response);
});
export const UserDataReducer = createSlice({
  name: 'User_Data',
  initialState: {
    userApiData: {},
    status: null,
  },
  // reducers: {
  //   setApiData: (state, action) => {
  //     state.userApiData = action.payload;s
  //   },
  // },
  extraReducers: {
    [userData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userData.fulfilled]: (state, {payload}) => {
      state.userApiData = payload;
      state.status = 'success';
    },
    [userData.pending]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// export const {setApiData} = UserDataReducer.actions;
// export const {userData} = UserDataReducer.actions;

export const dataFulfilled = state => state.user_data.fulfilled;
export const dataPending = state => state.user_data.pending;

export default UserDataReducer.reducer;
