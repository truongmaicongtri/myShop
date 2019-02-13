import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import notifyReducer from './notifyReducer';
import shopReducer from './shopReducer';

export default combineReducers({
    cart: cartReducer,
    login: loginReducer,
    notification: notifyReducer,
    shop: shopReducer
});
