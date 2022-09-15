import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success :false,
    loading:'',
    error:''

}

//fucntion for signup
export const analystSignup = createAsyncThunk('analystsignup', (stated) => {
    return axios
    .post('/analyst/signup', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for sign in
export const analystSignin = createAsyncThunk('analystsignin', (stated) => {
    return axios
    .post('/analyst/login', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for rsest superNewPassword, sends eamil to server 
export const analystResetPassword = createAsyncThunk('analystpass', (stated) => {
    return axios
    .post('/analyst/forgot_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function to verify token
export const verifyanalystToken = createAsyncThunk('verifyanalysttoken', (stated) => {
    return axios
    .post('/analyst/reset_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})


export const analystNewPassword = createAsyncThunk('getanalystpass', ( stated) => {
    return axios
    .post('/analyst/new_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})





const analystslice = createSlice({
    name:"analystsignup",
    initialState,
    reducers:{
        analystSignupReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
        clearanalystError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(analystSignup.pending, (state) => {
            state.loading = 'signing up admin'
            
        })
        .addCase(analystSignup.fulfilled, (state,action) => {
            state.loading = 'new admin signed up'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(analystSignup.rejected, (state, action) => {
            state.loading = 'signing up admin failed'
            state.error = action.payload
            state.success = false
            
        })
        //for login
        .addCase(analystSignin.pending, (state) => {
            state.loading = 'signing in admin'
            
        })
        .addCase(analystSignin.fulfilled, (state,action) => {
            state.loading = 'admin signed in'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(analystSignin.rejected, (state, action) => {
            state.loading = 'signing in admin failed'
            state.error = action.payload
            state.success = false
            
        })
        //forgot password
        .addCase(analystResetPassword.pending, (state) => {
            state.loading = 'sending email'
            
        })
        .addCase(analystResetPassword.fulfilled, (state,action) => {
            state.loading = 'email sent check your email inbox'
        
            state.success = true
            
        })
        .addCase(analystResetPassword.rejected, (state, action) => {
            state.loading = 'sending failed'
            state.error = action.payload
            state.success = false
            
        })
       
        //new password
        .addCase(analystNewPassword.pending, (state) => {
            state.loading = 'reseting email'
            
        })
        .addCase(analystNewPassword.fulfilled, (state,action) => {
            state.loading = 'email has been reseted'
        
            state.success = true
            
        })
        .addCase(analystNewPassword.rejected, (state, action) => {
            state.loading = 'resetting  failed'
            state.error = action.payload
            state.success = false
            
        })
       


    }
})

export default analystslice.reducer
// export const {reset, clearError} = superslice.actions