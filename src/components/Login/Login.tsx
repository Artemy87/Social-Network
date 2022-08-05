import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {HeaderPropsType} from "./LoginContainer";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export const Login: FC<HeaderPropsType> = () => {
    const onSubmit = (formData: FormLoginDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const LoginForm: FC<InjectedFormProps<FormLoginDataType>> = (props) => { // типизация redux-form
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"login"}
                       component={Input}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={"password"}
                       name={"password"}
                       component={Input}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const ReduxLoginForm = reduxForm<FormLoginDataType>({form: 'login'})(LoginForm);


//types
type FormLoginDataType = {
    login: string
    password: string
    rememberMe: boolean
}