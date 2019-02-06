import {
    ADDTOCART,
    DECREASECARTAMOUNT,
    INCREASECARTAMOUNT,
    LOGIN,
    LOGOUT,
    CHANGE_NOTIFICATION,
    CHANGE_USER
} from './types';

export const addToCart = (cartItem) => ({ type: ADDTOCART, cartItem });
export const inCreaseItem = (index) => ({ type: INCREASECARTAMOUNT, index });
export const deCreaseItem = (index) => ({ type: DECREASECARTAMOUNT, index });

export const logIn = () => ({ type: LOGIN });
export const logOut = () => ({ type: LOGOUT });

export const changeNotification = (number) => ({ type: CHANGE_NOTIFICATION, number });

export const changeUser = (userId) => ({ type: CHANGE_USER, userId });
