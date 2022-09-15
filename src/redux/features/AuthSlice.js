import { createSlice } from "@reduxjs/toolkit";
import cogoToast from "cogo-toast";
import {
  new_password,
  reset_password,
  signin,
  signup,
} from "../functions/authFuctions";

const initialState = {
  isAuth: false,
  user: { role: "blog" },
  success: false,
  loading: false,
  error: "",
};

//TODO : replace reducers with createasyncthunk api calls

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
    reset: (state) => {
      state.error = "";
      state.loading = false;
      state.success = false;
    },
    clearError: (state) => {
      state.user = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(signup.rejected, (state, action) => {
        cogoToast.error(action.payload, { position: "top-right" });

        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      //for login
      .addCase(signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(signin.rejected, (state, action) => {
        cogoToast.error(action.payload, { position: "top-right" });
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(reset_password.pending, (state) => {
        state.loading = true;
      })
      .addCase(reset_password.fulfilled, (state, action) => {
        state.loading = true;
        state.success = true;
      })
      .addCase(reset_password.rejected, (state, action) => {
        cogoToast.error(action.payload, { position: "top-right" });
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      //new password
      .addCase(new_password.pending, (state) => {
        state.loading = true;
      })
      .addCase(new_password.fulfilled, (state, action) => {
        state.loading = "email has been reseted";

        state.success = true;
      })
      .addCase(new_password.rejected, (state, action) => {
        cogoToast.error(action.payload, { position: "top-right" });
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { login, logout, reset, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;
