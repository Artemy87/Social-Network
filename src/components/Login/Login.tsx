import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import s from './Login.module.css';

const Login: FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormLoginDataType) => {
        let {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe);
    }

    if(props.isAuth) return <Redirect to={"/profile"}/>;

    return (
        <div className={s.container}>
            <div className={s.headerContainer}>Login</div>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const LoginForm: FC<InjectedFormProps<FormLoginDataType>> = (props) => { // типизация redux-form
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div className={s.loginInput}>
                <Field placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required, maxLength50]}/>
            </div>
            <div className={s.passwordInput}>
                <Field placeholder={"password"}
                       name={"password"}
                       type={"text"}
                       component={Input}
                       validate={[required, maxLength50]}/>
            </div>
            <div className={s.checkboxContainer}>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}/>
                <div>remember me</div>
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div className={s.buttonContainer}>
                <button >Login</button>
            </div>
        </form>
    </div>
}

const ReduxLoginForm = reduxForm<FormLoginDataType>({form: 'login'})(LoginForm);


const mapStateToProps = (state: AppStateType): mapStateToProps  => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);

//types
type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}
type FormLoginDataType = {
    auth: boolean
    email: string
    password: string
    rememberMe: boolean
}
type mapStateToProps = {
    isAuth: boolean
}


/*
type Inputs = {
    email: string
    password: string
}

const LoginForm = () => { // типизация redux-form

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.loginInput}>
                <input defaultValue='test' {...register("email")}/>
            </div>
            <div className={s.passwordInput}>
                <input {...register('password')} />
            </div>
            <div className={s.checkboxContainer}>
                <input type={"checkbox"} />
                <div>remember me</div>
            </div>
            {errors && <span className={s.formSummaryError}>This fields is required</span>}
            <div className={s.buttonContainer}>
                <button >Login</button>
            </div>
        </form>
    </div>
}*/
