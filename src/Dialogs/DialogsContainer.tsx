import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AllAppActionsType, AllStateType} from "../Redux/redux-store";

// type DialogsPropsType = {
//     store: StoreType // ??
// }

// export const DialogsContainer: FC<DialogsPropsType> = ({store,}) => {
//
//     const state = store.getState();
//
//     const onSendMessage = () => {
//         store.dispatch(sendMessageCreator())
//     }
//
//     const onUpdateNewMessageBody = (body: string) => {
//         store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//     return <Dialogs
//         dialogsPage={state.dialogsPage}
//         newMessageBody={state.dialogsPage.newMessageBody}
//         onSendMessage={onSendMessage}
//         onUpdateMessage={onUpdateNewMessageBody}
//     />
// };

// type StateType = {
//     dialogsPage: DialogType
//     newMessageBody: string
// }

let mapStateToProps = (state:AllStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    };
}

let mapDispatchToProps = (dispatch: Dispatch<AllAppActionsType>) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageCreator())
        },
        onUpdateMessage: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    };
}

export const DialogsContainer
    = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

