import Product from './Product';

export default class CartItem {
    item: Product;
    amount: 0;

    constructor(item, amount) {
        this.item = item;
        this.amount = amount;
    }
}
