import Item from './Item';

export class CartItem {
    item: Item;
    amount: 0;

    constructor(item, amount) {
        this.item = item;
        this.amount = amount;
    }
}
