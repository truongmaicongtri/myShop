import { CHANGE_USER } from '../actions/types';

const initialState = { user: '' };

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_USER:
            return { ...state, user: action.userId };
        default:
            return state;
    }
}
