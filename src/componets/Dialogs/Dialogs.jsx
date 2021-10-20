import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialoItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from 'redux-form' 
import {Redirect} from 'react-router' 

const Dialogs = (props) => {
  let state = props.dialogsPage;
 
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name}key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message}key={m.id}/>);
  let newMessageBody = state.newMessageBody;

  let AddNewMessage = (values) => {
    props.sendMessage(values.newMessageBody) 
  }
  if (!props.isAuth) return <Redirect to = {"/login"}/>
  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit = {AddNewMessage}/>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
          <div>
            <Field component = "textarea" name="newMessageBody" placeholder = "Enter new message"/>
          </div>
          <div><button>Send</button></div>
        </form>
  )
}
const AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm)

export default Dialogs;