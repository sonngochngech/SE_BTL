import axios from "axios";
import {base_url, config} from "../../utils/config";


const createFeeList = async (params) => {
    const payload = {
        householdIds: params?.households?.map((household) => household?._id),
        feeId: params?.fee_id,
        tableName: params?.tableName,
    }
    try {
        const response = await axios.post(`${base_url}list`, config);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }

}

const getFeeList = async (id) => {
    try {
        const response = await axios.get(`${base_url}list/${id}`, config);
        // console.log(response);
        return response.data.feeList;
    } catch (error) {
        throw new Error(error.message);
    }

}


export const listService = {
    createFeeList, getFeeList
}