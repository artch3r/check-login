/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginInfo',
  initialState: {
    login: null,
  },
  reducers: {
    setLogin: (state, { payload }) => {
      state.login = payload;
    },
  },
});

export default loginSlice.reducer;

export const { setLogin } = loginSlice.actions;
