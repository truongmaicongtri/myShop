import Image from 'react-native';
import { Category } from './Category';

export class CategoryWithAnImage extends Category {
    imageView: Image;

    constructor(name, viewDisplay, listItem, imageView) {
        super(name, viewDisplay, listItem);
        this.imageView = imageView;
    }
}
