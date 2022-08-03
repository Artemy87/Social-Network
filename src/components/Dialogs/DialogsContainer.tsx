import React from 'react';
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {AppActionsType, AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    };
}

let mapDispatchToProps = (dispatch: Dispatch<AppActionsType>): MapDispatchToPropsType => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageCreator())
        },
        onUpdateMessage: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
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
    newMessageBody: string
}
type MapDispatchToPropsType = {
    onSendMessage: () => void
    onUpdateMessage: (body: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

