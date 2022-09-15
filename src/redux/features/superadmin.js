import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success :false,
    loading:'',
    error:''

}

//fucntion for signup
export const superSignup = createAsyncThunk('supersignup', (stated) => {
    return axios
    .post('/superAdmin/signup', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for sign in
export const superSignin = createAsyncThunk('supersignin', (stated) => {
    return axios
    .post('/superAdmin/login', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for rsest superNewPassword, sends eamil to server 
export const superResetPassword = createAsyncThunk('superpass', (stated) => {
    return axios
    .post('/superAdmin/forgot_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function to verify token
export const verifyToken = createAsyncThunk('verifytoken', (stated) => {
    return axios
    .post('/superAdmin/reset_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})


export const superNewPassword = createAsyncThunk('getuserpass', ( stated) => {
    return axios
    .post('/superAdmin/new_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})





const superslice = createSlice({
    name:"supersignup",
    initialState,
    reducers:{
        superSignupReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
        clearError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(superSignup.pending, (state) => {
            state.loading = 'signing up superadmin'
            
        })
        .addCase(superSignup.fulfilled, (state,action) => {
            state.loading = 'new superadmin signed up'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(superSignup.rejected, (state, action) => {
            state.loading = 'signing up superadmin failed'
            state.error = action.payload
            state.success = false
            
        })
        //for login
        .addCase(superSignin.pending, (state) => {
            state.loading = 'signing in superadmin'
            
        })
        .addCase(superSignin.fulfilled, (state,action) => {
            state.loading = 'superadmin signed in'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(superSignin.rejected, (state, action) => {
            state.loading = 'signing in superadmin failed'
            state.error = action.payload
            state.success = false
            
        })
        //forgot password
        .addCase(superResetPassword.pending, (state) => {
            state.loading = 'sending email'
            
        })
        .addCase(superResetPassword.fulfilled, (state,action) => {
            state.loading = 'email sent check your email inbox'
        
            state.success = true
            
        })
        .addCase(superResetPassword.rejected, (state, action) => {
            state.loading = 'sending failed'
            state.error = action.payload
            state.success = false
            
        })
       
        //new password
        .addCase(superNewPassword.pending, (state) => {
            state.loading = 'reseting email'
            
        })
        .addCase(superNewPassword.fulfilled, (state,action) => {
            state.loading = 'email has been reseted'
        
            state.success = true
            
        })
        .addCase(superNewPassword.rejected, (state, action) => {
            state.loading = 'resetting  failed'
            state.error = action.payload
            state.success = false
            
        })
       


    }
})

export default superslice.reducer
export const {reset, clearError} = superslice.actions