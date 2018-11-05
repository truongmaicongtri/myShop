import Image from 'react-native';
import { Category } from './Category';

export class CategoryWithListItem extends Category {
    constructor(name, viewDisplay, listItem) {
        super(name, viewDisplay, listItem);
    }
}
