import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success :false,
    loading:'',
    error:''

}

//fucntion for signup
export const adminSignup = createAsyncThunk('adminsignup', (stated) => {
    return axios
    .post('/admin/signup', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for sign in
export const adminSignin = createAsyncThunk('adminsignin', (stated) => {
    return axios
    .post('/admin/login', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for rsest superNewPassword, sends eamil to server 
export const adminResetPassword = createAsyncThunk('adminpass', (stated) => {
    return axios
    .post('/admin/forgot_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function to verify token
export const verifyadminToken = createAsyncThunk('verifyadmintoken', (stated) => {
    return axios
    .post('/admin/reset_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})


export const adminNewPassword = createAsyncThunk('getadminpass', ( stated) => {
    return axios
    .post('/admin/new_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})





const adminslice = createSlice({
    name:"adminsignup",
    initialState,
    reducers:{
        adminSignupReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
        clearadminError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(adminSignup.pending, (state) => {
            state.loading = 'signing up admin'
            
        })
        .addCase(adminSignup.fulfilled, (state,action) => {
            state.loading = 'new admin signed up'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(adminSignup.rejected, (state, action) => {
            state.loading = 'signing up admin failed'
            state.error = action.payload
            state.success = false
            
        })
        //for login
        .addCase(adminSignin.pending, (state) => {
            state.loading = 'signing in admin'
            
        })
        .addCase(adminSignin.fulfilled, (state,action) => {
            state.loading = 'admin signed in'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(adminSignin.rejected, (state, action) => {
            state.loading = 'signing in admin failed'
            state.error = action.payload
            state.success = false
            
        })
        //forgot password
        .addCase(adminResetPassword.pending, (state) => {
            state.loading = 'sending email'
            
        })
        .addCase(adminResetPassword.fulfilled, (state,action) => {
            state.loading = 'email sent check your email inbox'
        
            state.success = true
            
        })
        .addCase(adminResetPassword.rejected, (state, action) => {
            state.loading = 'sending failed'
            state.error = action.payload
            state.success = false
            
        })
       
        //new password
        .addCase(adminNewPassword.pending, (state) => {
            state.loading = 'reseting email'
            
        })
        .addCase(adminNewPassword.fulfilled, (state,action) => {
            state.loading = 'email has been reseted'
        
            state.success = true
            
        })
        .addCase(adminNewPassword.rejected, (state, action) => {
            state.loading = 'resetting  failed'
            state.error = action.payload
            state.success = false
            
        })
       


    }
})

export default adminslice.reducer
// export const {reset, clearError} = superslice.actions