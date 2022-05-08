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
}

const initialStateType = {
    users: []
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

        default : return state
    }
}

export type UsersActionType
    = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>


export const followAC = (id: string) => {
    return {type: 'FOLLOW', id} as const
}
export const unfollowAC = (id: string) => {
    return {type: 'UNFOLLOW', id} as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {type: 'SET-USERS', users} as const
}