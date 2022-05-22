export type UsersType = {
    id: string
    name: string
    photosUrl?: string
    photos?: {small: string}
    followed: boolean
    status: string
    location: {city: string, country: string}
}
export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialStateType = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state:InitialStateType = initialStateType, action:UsersActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el =>
                    el.id === action.id
                        ? {...el, followed: true}
                        : el
                )}
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el =>
                    el.id === action.id
                        ? {...el, followed: false}
                        : el
                )}
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...state.users, ...action.users]}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.page}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }

        default : return state
    }
}

export type UsersActionType
    = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC>


export const followAC = (id: string) => {
    return {type: 'FOLLOW', id} as const
}
export const unfollowAC = (id: string) => {
    return {type: 'UNFOLLOW', id} as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPageAC = (page: number) => {
    return {type: 'SET-CURRENT-PAGE', page} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', totalCount} as const
}