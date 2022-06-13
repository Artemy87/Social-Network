import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '57c8177e-0cc1-45bd-9287-f4d1570cbc36'
    },
})

export const usersAPI = {
    getUsers: (pageSize: number = 1, currentPage: number = 10) => {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollowUser: (id: string) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followUser: (id: string) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    auth: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

