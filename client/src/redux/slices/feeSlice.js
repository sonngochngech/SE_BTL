<<<<<<< HEAD
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {feeService} from "../services/feeService";


export const getAllFees = createAsyncThunk(
    'fees',
    async (thunkAPI) => {
        try {
            return await feeService.getALlFees();
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

const feesState = {
    fees: [],
    status: "",
}


export const feeSlice = createSlice({
    name: 'fees',
    initialState: feesState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllFees.pending, (state) => {
            state.status = "loading";
        }).addCase(getAllFees.fulfilled, (state, action) => {
            state.fees = action.payload;
            state.status = "Successful";
        }).addCase(getAllFees.rejected, (state, action) => {
            state.status = "Fail";
        })
    }
})

=======
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {feeService} from "../services/feeService";


export const getAllFees = createAsyncThunk(
    'fees',
    async (thunkAPI) => {
        try {
            return await feeService.getALlFees();
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

const feesState = {
    fees: [],
    status: "",
}


export const feeSlice = createSlice({
    name: 'fees',
    initialState: feesState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllFees.pending, (state) => {
            state.status = "loading";
        }).addCase(getAllFees.fulfilled, (state, action) => {
            state.fees = action.payload;
            state.status = "Successful";
        }).addCase(getAllFees.rejected, (state, action) => {
            state.status = "Fail";
        })
    }
})

>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
export default feeSlice.reducer;