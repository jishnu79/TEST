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

export const getCurrentUser = async () => {
    try {
        const res = await API.post('/auth/getUserData', {
            token: localStorage.getItem('token')
        },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(res);
            
        if (res.data.success) {
            return res.data
        } else {
            return 'user not found'
        }
    } catch (error) {
        console.log();
    }
}