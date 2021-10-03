import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import DialogItem from './DialoItem/DialogItem';
import Message from './Message/Message';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
    dialogs={state} />
}

export default DialogsContainer;