import { ADDTOCART, DECREASE } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case ADDTOCART:
            if (state.filter(e => e.item.id === action.cartItem.item.id).length > 0) {
                const newArr = state;
                newArr[0].amount++;
                return newArr;
            }
            return [...state, action.cartItem];
        case DECREASE:
            return state - 1;

        default:
            return state;
    }
}
