const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

export type DialogType = { id: number; name: string }
export type MessageType = { id: number; message: string }

export type DialogsPageInitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>,
    newMessageBody: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Ksusha'},
        {id: 2, name: 'Masik'},
        {id: 3, name: 'Father'},
        {id: 4, name: 'Serega'},
        {id: 5, name: 'Olga'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Whats up?!'},
        {id: 4, message: 'How is it going?'},
        {id: 5, message: 'Yo! Can you fix it?!'},
    ],
    newMessageBody: ""
};

export const dialogsReducer = (state: DialogsPageInitialStateType = initialState, action: number) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case
        SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});