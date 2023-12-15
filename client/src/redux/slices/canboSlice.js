import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import canboService from "../services/canboService";


export const listUser = createAsyncThunk(
    'canbo/list',
    async (thunkAPI) => {
        try {
            return await canboService.listUser();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
)
export const getUserByEmail = createAsyncThunk(
    'canbo/get',
    async (email,thunkAPI) => {
        try {
            return await canboService.getUserByEmail(email);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
)
export const createUser = createAsyncThunk(
    'canbo/create',
    async (userData,thunkAPI) => {
        try {
            return await canboService.createUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
)
export const deleteUserByEmail = createAsyncThunk(
    'canbo/delete',
    async (email,thunkAPI) => {
        try {
            return await canboService.deleteUserByEmail(email);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
)
export const isAdmin = createAsyncThunk(
    'canbo/delete',
    async (thunkAPI) => {
        try {
            return await canboService.isAdmin();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
)
// const canBoState = {
//     fees: [],
//     list: "",
//     user: "",
// }


// export const canBoSlice = createSlice({
//     name: 'canbo',
//     initialState: canBoState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(getAllFees.pending, (state) => {
//             state.status = "Loading";
//         }).addCase(getAllFees.fulfilled, (state, action) => {
//             state.fees = action.payload;
//             state.status = "Successful";
//         }).addCase(getAllFees.rejected, (state, action) => {
//             state.status = "Fail";
//         })
//     }
// })

// export default canBoSlice.reducer;