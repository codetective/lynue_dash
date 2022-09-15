import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user:{},
    success :false,
    loading:'',
    error:''

}


//fucntion for signup
export const waitlist = createAsyncThunk('waitlist', (stated) => {
    return axios
    .post('/user/waitlist', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

const waitlistslice = createSlice({
    name:"waitlist",
    initialState,
    reducers:{
   wailtlistReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
         state.user = {}
        },
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(waitlist.pending, (state) => {
            state.loading = 'sending email'
            
        })
        .addCase(waitlist.fulfilled, (state, action) => {
            state.loading = 'email added'
          state.user = action.payload
            state.success = true
            
        })
        .addCase(waitlist.rejected, (state, action) => {
            state.loading = 'waitlist failed'
            state.error = action.payload
            state.success = false
            
        })
    }
})

export default waitlistslice.reducer