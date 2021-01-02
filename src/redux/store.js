// import dialogsReducer, { sendMessageCreator, updateNewMessageBodyCreator } from "./dialogs-reducer"
// import profileReducer, { addPostActionCreator, updateNewPostTextActionCreator } from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi! How are you???', likesCount: 12 },
                { id: 2, message: 'You looking good!!!', likesCount: 386 },
                { id: 3, message: 'You looking good!!!', likesCount: 386 }
            ],
            newPostText: 'UraUra'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hi Man! How Are You???' },
                { id: 3, message: 'Im gonna learn JS!' },
                { id: 4, message: 'How you filling???' }
            ],
            dialogs: [
                { id: 1, name: 'Ura' },
                { id: 2, name: 'Valeriia' },
                { id: 3, name: 'Alexander' },
                { id: 4, name: 'Sveta' },
                { id: 5, name: 'Marina' },
                { id: 6, name: 'Valentin' }
            ],
            newMessageBody: ''
        },
        sidebar: {
            sidebarFriends: [
                { name: 'Ura' },
                { name: 'Petya' },
                { name: 'Vasya' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed!');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}




window.store = store
export default store