import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_API } from "../../utils/config";

/**
 * auth functions
 * begin here
 */

//fucntion for signup
export const signup = createAsyncThunk("signup", (data) => {
  return axios
    .post("/", data)
    .then((res) => res.data)
    .catch((err) => err.message);
});

// function for sign in
export const signin = createAsyncThunk(
  "signin",
  async (data, { rejectWithValue }) => {
    let { email, password } = data;
    try {
      let res = await axios.post(AUTH_API.login, {
        email,
        password,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }

    // .then((res) => res.data)
    // .catch((err) => {
    //   return rejectwithvalue
    // });
  }
);

// function for rsest superNewPassword, sends eamil to server
export const reset_password = createAsyncThunk("resetpassword", (data) => {
  return axios
    .post("/admin/forgot_password", data)
    .then((res) => res.data)
    .catch((err) => err.message);
});

// function to verify token
export const verify_token = createAsyncThunk("verifytoken", (data) => {
  return axios
    .post("/admin/reset_password", data)
    .then((res) => res.data)
    .catch((err) => err.message);
});

export const new_password = createAsyncThunk("newpassword", (data) => {
  return axios
    .post("/admin/new_password", data)
    .then((res) => res.data)
    .catch((err) => err.message);
});
