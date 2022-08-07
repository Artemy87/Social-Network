import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";

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
                isAuth: action.payload.isAuth
            }
        }
        default:
            return state;
    }
}

//actionCreator
const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: 'SET-USER-DATA', payload: {id, email, login, isAuth}} as const;
};


//thunkCreators`
enum STATUS {
    SUCCESS = 0
}

export const getAuthUserData = () => { // thunkCreator, внешняя ф-я, которая возвращает санки(thunk)
    return (dispatch: Dispatch) => { //thunk -> (dispatch) => {}
        authAPI.me()
            .then((res) => {
                if(res.data.resultCode === STATUS.SUCCESS) {
                    let {login, id, email} = res.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppStateType, void, AuthActionsType>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if(res.data.resultCode === STATUS.SUCCESS) {
                dispatch(getAuthUserData())
            }
        })
}

export const logOut = () => (dispatch: ThunkDispatch<AppStateType, void, AuthActionsType>) => {
    authAPI.logout()
        .then(res => {
            if(res.data.resultCode === STATUS.SUCCESS) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

//types

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthActionsType =
    | ReturnType<typeof setAuthUserData>
