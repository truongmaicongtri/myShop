export default class Product {
  productid: string;
  productname: string;
  price: 0;
  productimgs: Array<string>;
  detail: string;

  constructor(id, name, price, img, detail) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.detail = detail;
  }
}
