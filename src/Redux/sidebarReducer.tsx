import {FriendsType, SidebarType} from "./store";
import {v1} from "uuid";

const initialState:SidebarType = {
        friends: [
            {id: v1(), name: 'Katya'},
            {id: v1(), name: 'Irina'},
            {id: v1(), name: 'Misha'},
        ]
}

export const sidebarReducer = (state=initialState, action: FriendsType) => {
    switch (action) {
        default: return {...state}
    }
}
