import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {listService} from "../services/listService";


const listState = {
    feeLists: [],
    contriLists: [],
    status: ""
}
export const createFeeList = createAsyncThunk(
    'createFeeList',
    async (params, thunkAPI) => {
        try {
            return await listService.createFeeList(params);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)

export const getFeeHouseholdList = createAsyncThunk(
    'feeHouseholdList',
    async (id, thunkAPI) => {
        try {
            console.log("bgh");
            console.log(id);
            return await listService.getFeeList(id);
        } catch (error) {

            console.log("bghss");
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const listSlice = createSlice({
    name: 'lists',
    initialState: listState,
    reducers: {
        updateStatus: (state, action) => {
            const index = state.feeList.findIndex((feeHousehold) => feeHousehold._id === action.payload.id);
            state.feeList[index].status = action.payload.status;
        },
        updateDate: (state, action) => {
            const index = state.feeList.findIndex((feeHousehold) => feeHousehold._id === action.payload.id);
            console.log("xxxx");
            console.log(index);
            state.feeList[index].paymentTime = action.payload.date;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createFeeList.pending, (state) => {
            state.status = "loading";
        }).addCase(createFeeList.fulfilled, (state, action) => {

            state.feeList = action.payload;
            state.status = "Successful";

        }).addCase(createFeeList.rejected, (state, action) => {
            state.status = "Fail";
        }).addCase(getFeeHouseholdList.pending, (state) => {
            state.status = "loading";
        }).addCase(getFeeHouseholdList.fulfilled, (state, action) => {
            state.feeList = action.payload;
            state.status = "Successful";
        }).addCase(getFeeHouseholdList.rejected, (state, action) => {
            state.status = "Fail";
        })
    }
})
export const {updateStatus, updateDate} = listSlice.actions;
export default listSlice.reducer;