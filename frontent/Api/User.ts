import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:4000" })

export const getAllUsers = async () => {
    try {
        const res = await API.get('/user/getAllUsers')
        if (res.data) {
            return res.data
        }
    } catch (error) {
        return error
    }
}

export const getUser = async (userId: string) => {
    try {
        if (userId) {
            const res = await API.post('/user/getUserData', {
                id: userId
            })

            if (res.data) {
                return res.data.data
            } else {
                return 'User not found'
            }
        }
    } catch (error) {
        return
    }
}

export const updateUser = async (data: any) => {
    try {
        if (data?.id) {
            const res = await API.put('/user/updateUser', data)

            if (res.data) {
                return res.data
            } else {
                return 'User not found'
            }
        }
    } catch (error) {
        return error
    }
} 

export const uploadImage = async (data: any) => {
    try {
        await API.post('/user/uploadImage', data)
    } catch (error) {
        console.log(error);
    }
}