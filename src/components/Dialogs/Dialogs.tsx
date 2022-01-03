import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogItem";
import {DialogsPageInitialStateType, DialogType, MessageType} from "../../redux/dialogs-reducer";

export type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageInitialStateType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d: DialogType) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map((m: MessageType) => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    const inputValue = useRef(null);

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    const sendNewMessage = () => {
        props.sendMessage();
    }

    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={s.text}>
                <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message' ref={inputValue} />
                </div>
                <div>
                    <button onClick={sendNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}