import {createSlice} from '@reduxjs/toolkit';

export const UserData = createSlice({
  name: 'User',
  initialState: {
    data: {
      name: 'Mehtab',
      id: 1,
      Sap: 70067360,
      Degree: 'Software Engineering',
      CGPA: 3.5,
    },
  },
  reducers: {
    addData: (state, action) => {
      state = {
        ...state,
        newData: {
          name: 'Yasir',
          id: 2,
          Sap: 70067345,
          Degree: 'Software Engineering',
          CGPA: 3.0,
        },
      };
      console.log('working');
      console.log(state);
    },
  },
});

export const {addData} = UserData.actions;

export default UserData.reducer;
