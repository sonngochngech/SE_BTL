import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statisticService } from "../services/statisticService";

export const getFee = createAsyncThunk(
    'getFee',
    async (thunkAPI) => {
        try {
            return await statisticService.getFee();
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

const statisticSlice = createSlice({
    name: "Statistic",
    initialState: null,
    reducers: [],
    extraReducers: (builder) => {
        builder
        .addCase(getFee.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getFee.fulfilled, (state, action) => {
            state.contributions = action.payload;
            state.status = "Successful";
            // console.log("aaa");
            // console.log(state.contributions);
        })
        .addCase(getFee.rejected, (state, action) => {
            state.status = "Fail";
        })
    }
})

export default statisticSlice.reducer;
