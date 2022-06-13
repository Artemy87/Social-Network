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
    followingInProgress: boolean
}

const initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
}

export const usersReducer = (state:InitialStateType = initialState, action:UsersActionType): InitialStateType => {
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
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {...state, followingInProgress: action.toggle}
        }

        default : return state
    }
}

export type UsersActionType =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleFollowingProgress>

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
export const toggleFollowingProgress = (toggle: boolean) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        toggle
    } as const
}