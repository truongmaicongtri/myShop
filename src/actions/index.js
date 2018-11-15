import {
    ADDTOCART,
    DECREASECARTAMOUNT,
    INCREASECARTAMOUNT,
    LOGIN,
    LOGOUT
} from './types';

export const addToCart = (cartItem) => ({ type: ADDTOCART, cartItem });
export const inCreaseItem = (index) => ({ type: INCREASECARTAMOUNT, index });
export const deCreaseItem = (index) => ({ type: DECREASECARTAMOUNT, index });

export const logIn = () => ({ type: LOGIN });
export const logOut = () => ({ type: LOGOUT });
