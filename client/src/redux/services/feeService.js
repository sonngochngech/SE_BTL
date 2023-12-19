import axios from "axios";
import { base_url, config } from "../../utils/config";

const getALlFees = async () => {
  try {
    const response = await axios.get(`${base_url}fees`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    });
    return response.data.fees;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const feeService = {
  getALlFees,
};
