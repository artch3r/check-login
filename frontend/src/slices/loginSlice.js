/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginInfo',
  initialState: {
    login: localStorage.getItem('login'),
  },
  reducers: {
    setLogin: (state, { payload }) => {
      state.login = payload;
    },
  },
});

export default loginSlice.reducer;

export const { setLogin } = loginSlice.actions;

export const selectLogin = (state) => state.loginInfo.login;
