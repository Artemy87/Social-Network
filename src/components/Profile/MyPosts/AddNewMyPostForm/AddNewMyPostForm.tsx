import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import React, {FC} from "react";
import {Field, InjectedFormProps} from "redux-form";
import s from "./AddNewMyPostForm.module.css";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import SuperButton from "../../../SuperButton/SuperButton";
import {FormMyPostsDataType} from "../MyPosts";

const maxLength10 = maxLengthCreator(10);

export const AddNewMyPostForm: FC<InjectedFormProps<FormMyPostsDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} // обязательно вызывать handleSubmit
              className={s.postForm}>
            <div className={s.sendPostForm}>
                <div>
                    <Field name={'newPostText'}
                           placeholder={'post message'}
                           component={Textarea}
                           validate={[required, maxLength10]}/>
                </div>
                <div>
                    <SuperButton>add post</SuperButton>
                </div>
            </div>
        </form>
    )
}