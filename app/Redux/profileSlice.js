import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosSecure from "../utils/axiosSecure";


export const profileData = createAsyncThunk(
    "profile/profileData",
    async ({ email }) => {
        const response = await axiosSecure.get(`/api/profile/profile_data/${email}`);
        return response.data.data
    }
)


export const profileUpdate = createAsyncThunk(
    "profile/profileUpdate",
    async ({ data, email }) => {
        const response = await axiosSecure.patch(`/api/profile/profile_info/${email}`, data)
        console.log('check profile data', response.data.data)
        return response.data.data
    }
)


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        userData: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            // profile data show
            .addCase(profileData.pending, (state) => {
                state.loading = false
            })
            .addCase(profileData.fulfilled, (state, action) => {
                state.userData = action.payload
            })
            .addCase(profileData.rejected, (state) => {
                state.loading = false;
                state.error = action.payload;
            })
            
            // profile data update
            .addCase(profileUpdate.pending, (state) => {
                state.loading = true;
            })
            .addCase(profileUpdate.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = { ...state.userData, ...action.payload };
            })
            .addCase(profileUpdate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})



export default profileSlice.reducer