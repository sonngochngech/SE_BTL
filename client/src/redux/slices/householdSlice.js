<<<<<<< HEAD
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {householdService} from "../services/householdService";


export const getHouseholdsBasedOnParams = createAsyncThunk(
    'householdFeeList',
    async (params, thunkAPI) => {
        try {
            console.log("param");
            console.log(params);
            return await householdService.getHouseholdsBasedOnParams(params);
        } catch (error) {
            console.log("aaas");
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)


const householdState = {
    households: [],
    status: "",
}

export const householdSlice = createSlice({
    name: "households",
    initialState: householdState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHouseholdsBasedOnParams.pending, (state) => {
            state.status = "loading";
        }).addCase(getHouseholdsBasedOnParams.fulfilled, (state, action) => {
            state.households = action.payload;
            state.status = "Successful";
        }).addCase(getHouseholdsBasedOnParams.rejected, (state, action) => {
            state.status = "Fail";
        })

    }

});
=======
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {householdService} from "../services/householdService";


export const getHouseholdsBasedOnParams = createAsyncThunk(
    'householdFeeList',
    async (params, thunkAPI) => {
        try {
            console.log("param");
            console.log(params);
            return await householdService.getHouseholdsBasedOnParams(params);
        } catch (error) {
            console.log("aaas");
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)



const householdState = {
    households: [],
    status: "",
}

export const householdSlice = createSlice({
    name: "households",
    initialState: householdState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHouseholdsBasedOnParams.pending, (state) => {
            state.status = "loading";
        }).addCase(getHouseholdsBasedOnParams.fulfilled, (state, action) => {
            state.households = action.payload;
            state.status = "Successful";
        }).addCase(getHouseholdsBasedOnParams.rejected, (state, action) => {
            state.status = "Fail";
        })

    }

});
>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
export default householdSlice.reducer;