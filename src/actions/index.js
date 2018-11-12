import { ADDTOCART, DECREASE } from './types';

export const addToCart = (cartItem) => ({ type: ADDTOCART, cartItem });
export const counterDecrease = () => ({ type: DECREASE });
