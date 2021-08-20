import { PROFILE_SHOW_NAME } from "./action"

const initialState = {
    showName: false,    
    name: 'Default'
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case PROFILE_SHOW_NAME:
            return {
                ...state,
                showName: !state.showName,
            }
            default: 
                return state;
    }
}