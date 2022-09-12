import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

//TODO : replace reducers with createasyncthunk api calls

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("__test-auth__", 1);
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
    checkAuthState: (state) => {
      let authState = localStorage.getItem("__test-auth__");
      switch (authState !== null) {
        case true:
          state.isAuth = true;
          break;

        default:
          break;
      }
    },
  },
});

export const { login, logout, checkAuthState } = AuthSlice.actions;
export default AuthSlice.reducer;
