import { ADDTOCART, DECREASE, INCREASE, SETBADGE } from './types';

export const addToCart = (cartItem) => ({ type: ADDTOCART, cartItem });
export const inCreaseItem = (index) => ({ type: INCREASE, index });
export const deCreaseItem = (index) => ({ type: DECREASE, index });
export const setBadge = () => ({ type: SETBADGE });
