<<<<<<< HEAD
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../redux/slices/userSlice"
import feeReducer from "../redux/slices/feeSlice"
import contributionReducer from "./slices/contributionSlice";
import householdReducer from "./slices/householdSlice";
import  listReducer from "./slices/listSlice";
import membersReducer from './slices/populationSlice';
export  const store=configureStore({
    reducer:{
        user: userReducer,
        fee: feeReducer,
        contribution:contributionReducer,
        household: householdReducer,
        list:listReducer,
        members: membersReducer,
    }
});

=======
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

>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
