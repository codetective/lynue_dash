import { createSlice } from "@reduxjs/toolkit";
import cogoToast from "cogo-toast";
import { getNotifs } from "../functions/notificationFunctions";

const initialState = {
  notifications: [],
  error: false,
  loading: true,
};

export const NotificationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = "";
      state.loading = false;
    },
    clearError: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotifs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNotifs.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(getNotifs.rejected, (state, action) => {
        cogoToast.error(action.payload, { position: "top-right" });

        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset, clearError } = NotificationSlice.actions;
export default NotificationSlice.reducer;
