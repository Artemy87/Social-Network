import React, {FC} from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import SuperButton from "../../SuperButton/SuperButton";
import {FormDialogsDataType} from "../Dialogs";
import s from './AddMessageForm.module.css';

const maxLengthMessage = maxLengthCreator(50);

const AddMessageForm: FC<InjectedFormProps<FormDialogsDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} // обязательно вызывать handleSubmit
              className={s.sendMessageForm}>
            <div>
                <Field name={'newMessageBody'}
                       placeholder={'Enter your message'}
                       component={Textarea}
                       validate={[required, maxLengthMessage]}/>
            </div>
            <SuperButton>add message</SuperButton>
        </form>
    )
}

export default AddMessageForm;