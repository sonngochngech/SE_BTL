<<<<<<< HEAD
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
=======
import axios from "axios";
import {base_url, config} from "../../utils/config";

const getALlFees = async () => {
    try {
        console.log(localStorage.getItem('token'));
        console.log(config);
        const response = await axios.get(`${base_url}fees`,
            {headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: "application/json",
        }});
        // console.log("sss");
        // console.log(response);
        return response.data.fees;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const feeService = {
    getALlFees,
>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
}