import Image from 'react-native';

export default class Item {
  id: string;
  name: string;
  cost: 0;
  img: Array<Image>;
  detail: string;

  constructor(id, name, cost, img, detail) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.img = img;
    this.detail = detail;
  }
}
