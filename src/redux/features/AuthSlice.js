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
  token: null,
  user: null,
  loading: false,
  error: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.loading = false;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      state.loading = false;
    },
    reset: (state) => {
      state.error = "";
      state.loading = false;
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
      })
      .addCase(signup.rejected, (state, action) => {
        cogoToast.error(action.payload, { position: "top-right" });

        state.loading = false;
        state.error = action.payload;
      })
      //for login
      .addCase(signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        // const { people: p, token } = action.payload;
        // const user = {
        //   name: p.userFirstname + p.userLastname,
        //   id: p.userID,
        //   email: p.useremail,
        //   phone: p.userphone,
        //   address: p.useraddress,
        //   image: p.userpicture,
        //   role: p.userrole,
        // };
        // state.user = user;
        let token = action.payload.token;

        state.token = token;
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
