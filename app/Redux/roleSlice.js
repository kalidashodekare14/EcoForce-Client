import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosSecure from "../utils/axiosSecure";


export const roleData = createAsyncThunk(
    "role/roleData",
    async ({ token }) => {
        const response = await axiosSecure.get('/api/dashboard/role', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.data
    }
)

const roleManagement = createSlice({
    name: 'role',
    initialState: {
        isRole: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(roleData.pending, (state) => {
                state.loading = true;
            })
            .addCase(roleData.fulfilled, (state, action) => {
                state.loading = false;
                state.isRole = action.payload;
            })
            .addCase(roleData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})


export default roleManagement.reducer