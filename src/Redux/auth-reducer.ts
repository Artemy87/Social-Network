import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppActionsType} from "./redux-store";

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
    isAuth: false //логинизация
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }

        default:
            return state;
    }
}

export type AuthActionsType = ReturnType<typeof setAuthUserDataAC>

const setAuthUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        payload: {id, email, login}
    } as const;
};

export const getAuthUserData = () => { // thunkCreator, внешняя ф-я, которая возвращает санки(thunk)
    return (dispatch: Dispatch<AppActionsType>):any => { //thunk -> (dispatch) => {}
        authAPI.me()
            .then(res => {
                if(res.data.resultCode === 0) {
                    let {login, id, email} = res.data.data;
                    dispatch(setAuthUserDataAC(id, email, login));
                }
            })
    }
}

