import Image from 'react-native';
import { Category } from './Category';

export class CategoryWithSwiper extends Category {
    swiperSource: Array<Image>;

    constructor(name, viewDisplay, listItem, swiperSource) {
        super(name, viewDisplay, listItem);
        this.swiperSource = swiperSource;
    }
}
