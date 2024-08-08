import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  accessToken: null,
  displayName: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { payload } = action;
      state.isLoggedIn = true;
      state.displayName = payload.displayName;
      state.accessToken = payload.accessToken;
      console.log(payload, 'displayName' )
      Cookies.set('accessToken', payload?.accessToken as string)
    },
    userLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    userLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      Cookies.remove('accessToken')
    },
  },
});
export const { loginSuccess, userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
