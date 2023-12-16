
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../redux/slices/userSlice"
import feeReducer from "../redux/slices/feeSlice"
import contributionReducer from "./slices/contributionSlice";
import householdReducer from "./slices/householdSlice";
import  listReducer from "./slices/listSlice";
import statisticReducer from "./slices/statisticSlice";

export  const store=configureStore({
    reducer:{
        user: userReducer,
        fee: feeReducer,
        contribution:contributionReducer,
        household: householdReducer,
        list:listReducer,
        statistic: statisticReducer,
    }
});


