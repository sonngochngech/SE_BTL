import axios from "axios";
import {base_url,config} from "../../utils/config";

const listUser = async () => {
    try {
        const response = await axios.get(`${base_url}canbo/list`,config());
        if (response.data) {
            console.log(response)
            return response.data;
        } else {
            throw new Error("Sai Response");
        }

    } catch (e) {
        alert("Lỗi truy cập danh sách cán bộ")
        throw new Error(e.message);
    }
}
const getUserByEmail = async (email) => {
    try {
        const response = await axios.post(`${base_url}canbo/get`,{"email":email},config());
        if (response?.data) {
            return response.data;
        } else {
            throw new Error("Sai Response");
        }

    } catch (e) {
        alert("Lỗi tìm kiếm cán bộ")
        throw new Error(e.message);
    }
}
const createUser = async (userData) => {
    try {
        const response = await axios.post(`${base_url}canbo/create`,userData,config());
        if (response.data) {
            return response.data;
        } else {
            throw new Error("Sai Response");
        }

    } catch (e) {
        alert("Lỗi thêm cán bộ")
        throw new Error(e.message);
    }
}
const deleteUserByEmail = async (email) => {
    try {
        const response = await axios.post(`${base_url}canbo/delete`,{"email":email},config());
        if (response.data) {
            return response.data;
        } else {
            throw new Error("Sai Response");
        }

    } catch (e) {
        alert("Lỗi xóa cán bộ")
        throw new Error(e.message);
    }
}
const isAdmin = async () => {
    try {
        const response = await axios.get(`${base_url}canbo/check`,config());
        if (response) {
            return true
        }
    } catch (e) {
        return false
    }
}

const userService = {
    listUser,
    getUserByEmail,
    createUser,
    deleteUserByEmail,
    isAdmin
}
export default userService