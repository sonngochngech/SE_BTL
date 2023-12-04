import axios from "axios";
import {base_url, config} from "../../utils/config";

const getHouseholdsBasedOnParams = async (params) => {
    try {
        const queryString = new URLSearchParams(params).toString();
        const response = await axios.get(`${base_url}households?${queryString}`, config);
        // console.log("householdssss");
        // console.log(response);
        return response.data.households;
    } catch (error) {
        throw new Error(error.message);
    }
}


export const householdService = {
    getHouseholdsBasedOnParams
}