import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const sleepLog = createAsyncThunk('Sleeping/sleepLog', async (obj) => {
  console.log('thunk : ');
  const response = await fetch(
    'http://grow-backend.herokuapp.com/api/sleep-log',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer 7|kWcDNvzMDQrIznMSUBE1osrjSclZKoRTAa5VKYnh',
      },
      body: JSON.stringify(obj),
    },
  ).then(res => res.json());
  console.log(response);
  
});

export const SleepingSlice = createSlice({
  name: 'Sleeping',
  initialState: {
    status: null,
    data: {},
  },
  reducers: {},
  extraReducers: {
    [sleepLog.pending]: (state, action) => {
      state.status = 'loading';
    },
    [sleepLog.fulfilled]: (state, {payload}) => {
      state.data = payload;
      state.status = 'success';
    },
    [sleepLog.pending]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default SleepingSlice.reducer;
