import { ADDTOCART, DECREASECARTAMOUNT, INCREASECARTAMOUNT, CLEANCART } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case ADDTOCART:
            {
                const sameItem = state.filter(e => e.item.productid === action.product.productid);
                if (sameItem.length > 0) {
                    return [...state];
                }
                return [...state, { item: action.product, amount: 1 }];
            }
        case CLEANCART:
            {
                return [];
            }
        case INCREASECARTAMOUNT:
            {
                const newArr = state;
                newArr[action.index].amount++;
                return [...newArr];
            }
        case DECREASECARTAMOUNT:
            {
                const newArr = state;
                newArr[action.index].amount--;
                const newState = newArr.filter(a => a.amount > 0);
                return [...newState];
            }
        default:
            return state;
    }
}
