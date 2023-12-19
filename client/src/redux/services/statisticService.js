import axios from "axios";
import {base_url, config} from "../../utils/config";

const getFee = async () => {
    try {
        const response = await axios.get(`${base_url}getFee`, config());
        // console.log("sss");
        // console.log(response);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getStatics=async()=>{
    try{
        const response=await  axios.get(`${base_url}statistics/getStatics`, config());
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
export const statisticService = {
    getFee,getStatics
}