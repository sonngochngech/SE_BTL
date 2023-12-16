import axios from "axios";
import {base_url} from "../../utils/config";


const login = async (userData) => {
    try {
        const response = await axios.post(`${base_url}auth/login`, userData);
        if (response.data?.token) {
            localStorage.setItem("user", JSON.stringify(response.data.currentUser));
            localStorage.setItem("token", response.data.token);
            return response.data;
        } else {
            alert("Sai thông tin tài khoản, vui lòng nhập lại  ")
        }

    } catch (e) {
        alert("Sai thông tin tài khoản, vui lòng nhập lại  ")
        throw new Error(e.message);
    }
}

const logout = async () => {
    try {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    } catch (error) {
        throw new Error(error.message);
    }
}

export const userService = {
    login,
    logout
}