import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success :false,
    loading:'',
    error:''

}

//fucntion for signup
export const supportSignup = createAsyncThunk('supportsignup', (stated) => {
    return axios
    .post('/support/signup', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for sign in
export const supportSignin = createAsyncThunk('supportsignin', (stated) => {
    return axios
    .post('/support/login', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for rsest superNewPassword, sends eamil to server 
export const supportResetPassword = createAsyncThunk('supportpass', (stated) => {
    return axios
    .post('/support/forgot_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function to verify token
export const verifysupportToken = createAsyncThunk('verifysuporttoken', (stated) => {
    return axios
    .post('/support/reset_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})


export const supportNewPassword = createAsyncThunk('getuserpass', ( stated) => {
    return axios
    .post('/support/new_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})





const supportslice = createSlice({
    name:"supportsignup",
    initialState,
    reducers:{
        supportSignupReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
        clearsupportError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(supportSignup.pending, (state) => {
            state.loading = 'signing up supportadmin'
            
        })
        .addCase(supportSignup.fulfilled, (state,action) => {
            state.loading = 'new supportadmin signed up'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(supportSignup.rejected, (state, action) => {
            state.loading = 'signing up supportadmin failed'
            state.error = action.payload
            state.success = false
            
        })
        //for login
        .addCase(supportSignin.pending, (state) => {
            state.loading = 'signing in superadmin'
            
        })
        .addCase(supportSignin.fulfilled, (state,action) => {
            state.loading = 'superadmin signed in'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(supportSignin.rejected, (state, action) => {
            state.loading = 'signing in superadmin failed'
            state.error = action.payload
            state.success = false
            
        })
        //forgot password
        .addCase(supportResetPassword.pending, (state) => {
            state.loading = 'sending email'
            
        })
        .addCase(supportResetPassword.fulfilled, (state,action) => {
            state.loading = 'email sent check your email inbox'
        
            state.success = true
            
        })
        .addCase(supportResetPassword.rejected, (state, action) => {
            state.loading = 'sending failed'
            state.error = action.payload
            state.success = false
            
        })
       
        //new password
        .addCase(supportNewPassword.pending, (state) => {
            state.loading = 'reseting email'
            
        })
        .addCase(supportNewPassword.fulfilled, (state,action) => {
            state.loading = 'email has been reseted'
        
            state.success = true
            
        })
        .addCase(supportNewPassword.rejected, (state, action) => {
            state.loading = 'resetting  failed'
            state.error = action.payload
            state.success = false
            
        })
       


    }
})

export default supportslice.reducer
// export const {reset, clearError} = superslice.actions