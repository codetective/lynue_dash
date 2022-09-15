import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success :false,
    loading:'',
    error:''

}

//fucntion for signup
export const residental = createAsyncThunk('rent/resisental', (stated) => {
    return axios
    .post('/rent/detials', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})



const rentslice = createSlice({
    name:"rent",
    initialState,
    reducers:{
     rentReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
      rentError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(residental.pending, (state) => {
            state.loading = 'posting details'
            
        })
        .addCase(residental.fulfilled, (state,action) => {
            state.loading = 'details posted'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(residental.rejected, (state, action) => {
            state.loading = 'signing up admin failed'
            state.error = action.payload
            state.success = false
            
        })
        
    }
})

export default rentslice.reducer
// export const {reset, clearError} = superslice.actions