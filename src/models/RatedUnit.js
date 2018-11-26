export default class RatedUnit {
    shopName: string;
    star: number;
    date: string;

    constructor(shopName, star, date) {
        this.shopName = shopName;
        this.star = star;
        this.date = date;
    }
}
