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
    isFetching: boolean
}

const initialStateType = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                users: [...state.users, ...action.users]
                // users: [...action.users]
            }
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.page}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: !action.isFetchIng}
        }

        default : return state
    }
}

export type UsersActionType = ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching>

export const follow = (id: string) => {
    return {type: 'FOLLOW', id} as const
}
export const unfollow = (id: string) => {
    return {type: 'UNFOLLOW', id} as const
}
export const setUsers = (users: UsersType[]) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (page: number) => {
    return {type: 'SET-CURRENT-PAGE', page} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', totalCount} as const
}
export const toggleIsFetching = (isFetchIng: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetchIng} as const
}