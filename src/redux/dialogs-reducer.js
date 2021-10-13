const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        dialogs: [
            { id: 1, name: 'Filipp' },
            { id: 2, name: 'Karen' },
            { id: 3, name: 'Olga' },
            { id: 4, name: 'Marat' },
            { id: 5, name: 'Larisa' },
            { id: 6, name: 'Victor' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are your IT?' },
            { id: 3, message: 'yo' },
            { id: 4, message: 'yo' },
            { id: 5, message: 'yo' },
            { id: 6, message: 'yo' },
        ],
        newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;