import {createSlice} from "@reduxjs/toolkit";
import {getUser} from "../thunks/getUser";

const initialState = {
    user: {},
    isLoading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUser.pending, state => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})

export const userReducer = userSlice.reducer