import {
    ADDTOCART,
    DECREASECARTAMOUNT,
    INCREASECARTAMOUNT,
    LOGIN,
    LOGOUT,
    CHANGE_NOTIFICATION,
    CHANGE_USER,
    CHANGE_SHOP,
    EXIT_SHOP,
    CLEANCART
} from './types';

export const addToCart = (product) => ({ type: ADDTOCART, product });
export const cleanCart = () => ({ type: CLEANCART });
export const inCreaseItem = (index) => ({ type: INCREASECARTAMOUNT, index });
export const deCreaseItem = (index) => ({ type: DECREASECARTAMOUNT, index });

export const logIn = (username) => ({ type: LOGIN, username });
export const logOut = () => ({ type: LOGOUT });

export const changeNotification = (number) => ({ type: CHANGE_NOTIFICATION, number });

export const changeUser = (username) => ({ type: CHANGE_USER, username });

export const changeShop = (shopId) => ({ type: CHANGE_SHOP, shopId });

export const exitShop = () => ({ type: EXIT_SHOP });
