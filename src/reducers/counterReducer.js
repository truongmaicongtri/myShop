import { ADDTOCART, DECREASE, INCREASE, SETBADGE } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case ADDTOCART:
            {
                const sameItem = state.filter(e => e.item.id === action.cartItem.item.id);
                if (sameItem.length > 0) {
                    return [...state];
                }
                return [...state, action.cartItem];
            }
        case INCREASE:
            {
                const newArr = state;
                newArr[action.index].amount++;
                return [...newArr];
            }
        case DECREASE:
            {
                const newArr = state;
                newArr[action.index].amount--;
                const newState = newArr.filter(a => a.amount > 0);
                return [...newState];
            }
        case SETBADGE:
            {
                return [...state];
            }
        default:
            return state;
    }
}
