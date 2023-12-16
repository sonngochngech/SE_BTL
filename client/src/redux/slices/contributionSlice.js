<<<<<<< HEAD
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {contributionService} from "../services/contributionService";


export const getAllContributions = createAsyncThunk(
    'contributions',
    async (thunkAPI) => {
        try {
            return await contributionService.getALlContributions();
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

const contributionsState = {
    contributions: [],
    status: "",
}


export const contributionSlice = createSlice({
    name: 'contributions',
    initialState: contributionsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllContributions.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getAllContributions.fulfilled, (state, action) => {
            state.contributions = action.payload;
            state.status = "Successful";
            // console.log("aaa");
            // console.log(state.contributions);
        })
        .addCase(getAllContributions.rejected, (state, action) => {
            state.status = "Fail";
        })
    }
})

=======
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {contributionService} from "../services/contributionService";


export const getAllContributions = createAsyncThunk(
    'contributions',
    async (thunkAPI) => {
        try {
            return await contributionService.getALlContributions();
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

const contributionsState = {
    contributions: [],
    status: "",
}


export const contributionSlice = createSlice({
    name: 'contributions',
    initialState: contributionsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllContributions.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getAllContributions.fulfilled, (state, action) => {
            state.contributions = action.payload;
            state.status = "Successful";
            // console.log("aaa");
            // console.log(state.contributions);
        })
        .addCase(getAllContributions.rejected, (state, action) => {
            state.status = "Fail";
        })
    }
})

>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
export default contributionSlice.reducer;