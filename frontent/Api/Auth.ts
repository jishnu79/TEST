import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:4000" })

export const register = async (data: any) => {
    try {
        const res = await API.post('/auth/register', data)
        if (res.data) {
            return res.data
        }
    } catch (error) {
        return error
    }
}

export const login = async (data: any) => {
    try {
        const res = await API.post('/auth/login', data)
        if (res.data) {
            return res.data
        }
    } catch (error) {
        return error
    }
}