import Image from './Image';
import { Category } from './Category';

export class CategoryWithListItem extends Category {
    constructor(name, viewDisplay, listItem) {
        super(name, viewDisplay, listItem);
    }
}
