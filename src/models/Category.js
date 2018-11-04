import Item from './Item';

export class Category {
    name: string;
    viewDisplay: string;
    listItem: Array<Item>;

    constructor(name, viewDisplay, listItem) {
        this.name = name;
        this.viewDisplay = viewDisplay;
        this.listItem = listItem;
    }
}
