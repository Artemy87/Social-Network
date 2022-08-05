import {FC} from "react";
import s from './FormsControls.module.css';

const FormControl: FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError && `${s.formControl} ${s.error}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}