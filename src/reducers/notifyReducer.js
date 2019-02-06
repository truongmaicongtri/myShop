import { CHANGE_NOTIFICATION } from '../actions/types';

const initialState = { numberOfMessage: 0 };

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_NOTIFICATION:
            return { numberOfMessage: action.number };
        default:
            return state;
    }
}
