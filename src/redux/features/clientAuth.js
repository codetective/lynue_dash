import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success :false,
    loading:'',
    error:''

}

//fucntion for signup
export const userSignup = createAsyncThunk('usersignup', (stated) => {
    return axios
    .post('/user/signup', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for sign in
export const userSignin = createAsyncThunk('usersignin', (stated) => {
    return axios
    .post('/user/login', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for rsest superNewPassword, sends eamil to server 
export const userResetPassword = createAsyncThunk('userclientpass', (stated) => {
    return axios
    .post('/user/forgot_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function to verify token
export const verifyuserToken = createAsyncThunk('verifyusertoken', (stated) => {
    return axios
    .post('/user/reset_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})


export const userNewPassword = createAsyncThunk('getUserpass', ( stated) => {
    return axios
    .post('/user/new_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})





const userslice = createSlice({
    name:"usersignup",
    initialState,
    reducers:{
        userSignupReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
        clearuserError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(userSignup.pending, (state) => {
            state.loading = 'signing up user'
            
        })
        .addCase(userSignup.fulfilled, (state,action) => {
            state.loading = 'new user signed up'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(userSignup.rejected, (state, action) => {
            state.loading = 'signing up superadmin failed'
            state.error = action.payload
            state.success = false
            
        })
        //for login
        .addCase(userSignin.pending, (state) => {
            state.loading = 'signing in user'
            
        })
        .addCase(userSignin.fulfilled, (state,action) => {
            state.loading = 'user signed in'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(userSignin.rejected, (state, action) => {
            state.loading = 'signing in user failed'
            state.error = action.payload
            state.success = false
            
        })
        //forgot password
        .addCase(userResetPassword.pending, (state) => {
            state.loading = 'sending email'
            
        })
        .addCase(userResetPassword.fulfilled, (state,action) => {
            state.loading = 'email sent check your email inbox'
        
            state.success = true
            
        })
        .addCase(userResetPassword.rejected, (state, action) => {
            state.loading = 'sending failed'
            state.error = action.payload
            state.success = false
            
        })
       
        //new password
        .addCase(userNewPassword.pending, (state) => {
            state.loading = 'reseting email'
            
        })
        .addCase(userNewPassword.fulfilled, (state,action) => {
            state.loading = 'email has been reseted'
        
            state.success = true
            
        })
        .addCase(userNewPassword.rejected, (state, action) => {
            state.loading = 'resetting  failed'
            state.error = action.payload
            state.success = false
            
        })
       


    }
})

export default userslice.reducer
// export const {reset, clearError} = superslice.actions