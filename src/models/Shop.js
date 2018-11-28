
export default class Shop {
    shopName: string;
    listCategories: [];
    notifyMessages: [];
    shopInfo: {};

    constructor(shopName, listCategories, notifyMessages, shopInfo) {
        this.shopName = shopName;
        this.listCategories = listCategories;
        this.notifyMessages = notifyMessages;
        this.shopInfo = shopInfo;
    }
}
