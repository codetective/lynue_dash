import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success :false,
    loading:'',
    error:''

}

//fucntion for signup
export const moderatorSignup = createAsyncThunk('moderatorsignup', (stated) => {
    return axios
    .post('/moderator/signup', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for sign in
export const moderatorSignin = createAsyncThunk('moderatorsignin', (stated) => {
    return axios
    .post('/moderator/login', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function for rsest superNewPassword, sends eamil to server 
export const moderatorResetPassword = createAsyncThunk('moderatorpass', (stated) => {
    return axios
    .post('/moderator/forgot_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})

// function to verify token
export const verifymoderatorToken = createAsyncThunk('verifymoderatortoken', (stated) => {
    return axios
    .post('/moderator/reset_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})


export const moderatorNewPassword = createAsyncThunk('getmoderatorpass', ( stated) => {
    return axios
    .post('/moderator/new_password', stated)
    .then((res) => res.data)
    .catch((err) => err.message)
})





const moderatorslice = createSlice({
    name:"moderatorsignup",
    initialState,
    reducers:{
        moderatorSignupReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
        clearmoderatorError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(moderatorSignup.pending, (state) => {
            state.loading = 'signing up moderator'
            
        })
        .addCase(moderatorSignup.fulfilled, (state,action) => {
            state.loading = 'new moderator signed up'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(moderatorSignup.rejected, (state, action) => {
            state.loading = 'signing up moderator failed'
            state.error = action.payload
            state.success = false
            
        })
        //for login
        .addCase(moderatorSignin.pending, (state) => {
            state.loading = 'signing in moderator'
            
        })
        .addCase(moderatorSignin.fulfilled, (state,action) => {
            state.loading = 'moderator signed in'
            state.user = action.payload
            state.success = true
            
        })
        .addCase(moderatorSignin.rejected, (state, action) => {
            state.loading = 'signing in moderator failed'
            state.error = action.payload
            state.success = false
            
        })
        //forgot password
        .addCase(moderatorResetPassword.pending, (state) => {
            state.loading = 'sending email'
            
        })
        .addCase(moderatorResetPassword.fulfilled, (state,action) => {
            state.loading = 'email sent check your email inbox'
        
            state.success = true
            
        })
        .addCase(moderatorResetPassword.rejected, (state, action) => {
            state.loading = 'sending failed'
            state.error = action.payload
            state.success = false
            
        })
       
        //new password
        .addCase(moderatorNewPassword.pending, (state) => {
            state.loading = 'reseting email'
            
        })
        .addCase(moderatorNewPassword.fulfilled, (state,action) => {
            state.loading = 'email has been reseted'
        
            state.success = true
            
        })
        .addCase(moderatorNewPassword.rejected, (state, action) => {
            state.loading = 'resetting  failed'
            state.error = action.payload
            state.success = false
            
        })
       


    }
})

export default moderatorslice.reducer
// export const {reset, clearError} = superslice.actions