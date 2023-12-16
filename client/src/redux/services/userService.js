<<<<<<< HEAD
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
=======
import axios from "axios";
import {base_url, config} from "../../utils/config";


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
const changePassword=async (userData)=>{
    try{
        const response = await axios.post(`${base_url}auth/changePassword`,userData,config());
    }
    catch (e) {
        alert("Sai thông tin tài khoản, vui lòng nhập lại  ")
        throw new Error(e.message);
    }


}

export const userService = {
    login,
    logout,
    changePassword
>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
}