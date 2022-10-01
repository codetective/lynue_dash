import { createAsyncThunk } from "@reduxjs/toolkit";
import { sampleNotifs } from "../../utils/fakedata";

export const getNotifs = createAsyncThunk("getnotifs", (data) => {
  return sampleNotifs;
});
