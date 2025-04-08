import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosSecure from "../utils/axiosSecure";
import Swal from "sweetalert2";


export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ data }, { rejectWithValue }) => {
        try {
            const response = await axiosSecure.post('/api/user/login', data)
            console.log('checking login data', response.data)
            localStorage.setItem('token', response.data.data.token)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data)
        }
    }
)



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: null,
        loading: false,
        error: null
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.userData = action.payload
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer

