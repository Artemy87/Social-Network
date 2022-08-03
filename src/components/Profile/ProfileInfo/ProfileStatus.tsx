import React, {ChangeEvent, Component} from 'react';
import styles from './ProfileStatus.module.css';

export class ProfileStatus extends Component<ProfileStatusType, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = (): void => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = (): void => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }


    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
        // dispatch(this.props.updateStatus(e.currentTarget.value))
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                   status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={styles.statusContainer}>
                {
                    (!this.state.editMode)
                        ? <span
                            onDoubleClick={() => this.activateEditMode()}
                        >{this.props.status || 'no status'}</span>
                        : <input type="text"
                                 value={this.state.status}
                                 autoFocus={true}
                                 onBlur={() => this.deactivateEditMode()}
                                 onChange={this.onStatusChange}
                        />
                }
            </div>

        )
    }
}

//types
type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
};

// export const ProfileStatus = (props: ProfileStatusType) => {
//
//     const [title, setTitle] = useState('');
//
//     const onChangeHandler = (e: number) => {
//
//     }
//
//     return (
//         <div>
//             <div>
//                 <span
//                     onClick={}
//                     onBlur={}
//                 >{props.status}</span>
//             </div>
//             <div>
//                 <input type="text"
//                        value={title}
//                        onChange={() => onChangeHandler(e)}
//                 />
//             </div>
//         </div>
//     )
// }

//type

