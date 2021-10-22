import { getAuthUserData } from "./auth-reducer";

const INITALIZED_SUCCESS = 'INITALIZED_SUCCESS';

let initialState = {
    initalized: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITALIZED_SUCCESS:
            return {
                ...state,
                initalized: true
            }
        default:
            return state;
    }
}

export const initalizedSuccess = () => ({ type: INITALIZED_SUCCESS })
export const initalizeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initalizedSuccess())
    })
}




export default appReducer;