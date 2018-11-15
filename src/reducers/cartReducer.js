import { ADDTOCART, DECREASECARTAMOUNT, INCREASECARTAMOUNT } from '../actions/types';
// import CartItem from '../models/CartItem';
// import Item from '../models/Item';

// import productImage1 from '../../src/drawable/detailProductImage/productImage1.jpg';

// const item1 = new Item('001', 'Product 001', 1500000,
//     [productImage1, productImage1, productImage1], 'Hello! This is 001');

// const initialCart = [new CartItem(item1, 1)];

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
