type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    // isFetching: false
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
}

export type AuthActionsType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id,
            email,
            login
        }
    } as const;
};
