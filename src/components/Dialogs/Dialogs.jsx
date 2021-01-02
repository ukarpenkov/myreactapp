import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)
    // let newMessageBody = state.newMessageBody

    // let OnSendMessageClick = () => {
    //     props.sendMessage()
    // }
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value
    //     props.updateNewMessageBody(body)
    // }
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElement}
                    </div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    validate={[required, maxLength50]}
                    name="newMessageBody" placeholder="enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs