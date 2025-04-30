import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  isLoginPopupOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openLoginPopup: (state) => {
      state.isLoginPopupOpen = true;
    },
    closeLoginPopup: (state) => {
      state.isLoginPopupOpen = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoginPopupOpen = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { openLoginPopup, closeLoginPopup, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;