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
        ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;