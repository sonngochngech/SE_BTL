import axios from "axios";
import {base_url, config} from "../../utils/config";

const getALlFees = async () => {
    try {
        const response = await axios.get(`${base_url}fees`, config);
        // console.log("sss");
        // console.log(response);
        return response.data.fees;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const feeService = {
    getALlFees,
}