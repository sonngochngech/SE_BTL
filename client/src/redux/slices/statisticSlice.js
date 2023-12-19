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
export const getStatics=createAsyncThunk(
    'getStatics',
    async (thunkAPI) => {
        try {
            return await statisticService.getStatics();
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }

)
const staticState = {
    fees: [],
    status: "",
}


const statisticSlice = createSlice({
    name: "Statistic",
    initialState: staticState,
    reducers: [],
    extraReducers: (builder) => {
        builder
        .addCase(getFee.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getFee.fulfilled, (state, action) => {
            state.contributions = action.payload;
            state.status = "Successful";
        })
        .addCase(getFee.rejected, (state, action) => {
            state.status = "Fail";
        })
            .addCase(getStatics.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getStatics.fulfilled, (state, action) => {
                state.statics = action.payload;
                state.status = "Successful";
            })
            .addCase(getStatics.rejected, (state, action) => {
                state.status = "Fail";
            })
    }
})

export default statisticSlice.reducer;
