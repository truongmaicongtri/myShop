import Image from './Image';
import { Category } from './Category';

export class CategoryWith1ImageView extends Category {
    imageView: Image;

    constructor(name, viewDisplay, listItem, imageView) {
        super(name, viewDisplay, listItem);
        this.imageView = imageView;
    }
}
