
// export const HOST_URL = 'http://whatshop.ddns.net/what_shop_webservice/';
export const HOST_URL = 'http://whatshop.ddns.net/what_shop_webservice/';
export const GET_CATEGORY_URL = (shopId) =>
    HOST_URL + 'getCategories.php?shopid=' + shopId;

export const GET_CONTACT_SCREEN_URL = (shopId) =>
    HOST_URL + 'getContactScreen.php?shopid=' + shopId;

export const GET_NOTIFICATION_URL = (shopId) =>
    HOST_URL + 'getNotification.php?shopid=' + shopId;

export const GET_PRODUCT_URL = (categoryid) =>
    HOST_URL + 'getProduct.php?categoryid=' + categoryid;

export const GET_SHOP_NAME_URL = (shopId) =>
    HOST_URL + 'getShopname.php?shopid=' + shopId;

export const LOGIN_URL = HOST_URL + 'login.php';

export const GET_ACCOUNT_INFO_URL = (username) =>
    HOST_URL + 'getAccountInfo.php?user_name=' + username;

export const GET_ORDER_HISTORY_URL = (username) =>
    HOST_URL + 'getOrderHis.php?user_name=' + username;

export const GET_RATING_HISTORY_URL = (username) =>
    HOST_URL + 'getRatingHis.php?user_name=' + username;

export const CHANGE_PASSWORD_URL = HOST_URL + 'changePassword.php';

export const UPDATE_USERINFO_URL = HOST_URL + 'updateUserInfo.php';

export const CREATE_ORDER_URL = HOST_URL + 'insertOrder.php';

export const SEARCH_BY_SHOP_NAME = (shopName) =>
    HOST_URL + 'searchShopname.php?shopname=' + shopName;

export const REGISTER_URL = HOST_URL + 'register.php';
