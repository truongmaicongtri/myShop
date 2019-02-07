import { LOGIN, LOGOUT } from '../actions/types';

const initialState = { isLogin: false, username: '' };

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLogin: true, username: action.username };
        case LOGOUT:
            return { ...state, isLogin: false };
        default:
            return state;
    }
}
