import { CHANGE_SHOP } from '../actions/types';

const initialState = { isReady: false, shopId: '' };

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_SHOP:
            return { ...state, isReady: true, shopId: action.shopId };
        default:
            return state;
    }
}
