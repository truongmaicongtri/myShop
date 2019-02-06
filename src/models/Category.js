import Product from './Product';

export class Category {
    name: string;
    viewDisplay: string;
    listItem: Array<Product>;

    constructor(name, viewDisplay, listItem) {
        this.name = name;
        this.viewDisplay = viewDisplay;
        this.listItem = listItem;
    }
}
