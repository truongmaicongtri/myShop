import Image from './Image';

export default class Item {
  id: string;
  name: string;
  cost: string;
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
