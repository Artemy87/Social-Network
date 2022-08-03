import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '57c8177e-0cc1-45bd-9287-f4d1570cbc36'
    },
})

// мой id  в соцсети 23660
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    followUser(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollowUser(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object.')
        // return instance.get<ResponseProfileType>(`profile/${userId}`);
        return profileAPI.getProfile(userId);
    }
}

// мой id  в соцсети 23660
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ResponseProfileType>(`profile/${userId}`);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
}

export type ResponseProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string,
        large: string
    }
    userId: number
}
