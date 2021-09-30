import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi,how are you?', likesCount: '12' },
                { id: 2, message: 'It my first post', likesCount: '0' },
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;