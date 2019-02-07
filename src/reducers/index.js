import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import notifyReducer from './notifyReducer';

export default combineReducers({
    cart: cartReducer,
    login: loginReducer,
    notification: notifyReducer,
});
