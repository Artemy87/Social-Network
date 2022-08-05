import React from 'react';
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {InitialStateType, sendMessageCreator} from "../../Redux/dialogs-reducer";
import {AppActionsType, AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {dialogsPage: state.dialogsPage};
}

let mapDispatchToProps = (dispatch: Dispatch<AppActionsType>): MapDispatchToPropsType => {
    return {
        onSendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    };
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect // защищает вкладку Dialogs от незалогиненного пользователя
)(Dialogs);

//types
type MapStateToPropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchToPropsType = {
    onSendMessage: (newMessageBody: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

