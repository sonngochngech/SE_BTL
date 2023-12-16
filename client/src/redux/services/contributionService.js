import axios from "axios";
import {base_url, config} from "../../utils/config";

const getALlContributions = async () => {
    try {
        const response = await axios.get(`${base_url}contributions`, config);
        // console.log("sss");
        // console.log(response);
        return response.data.contributions;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const contributionService = {
    getALlContributions,
}