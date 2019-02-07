
export default class Order {
    shopName: string;
    date: string;
    id: string;
    totalCost: number;
    paymentType: string;
    address: string;

    constructor(shopName, date, id, totalCost, paymentType, address) {
        this.shopName = shopName;
        this.date = date;
        this.id = id;
        this.totalCost = totalCost;
        this.paymentType = paymentType;
        this.address = address;
    }
}
