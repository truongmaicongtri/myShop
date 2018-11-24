
export default class Order {
    customerName: string;
    date: string;
    id: string;
    totalCost: number;
    paymentType: string;
    address: string;

    constructor(customerName, date, id, totalCost, paymentType, address) {
        this.customerName = customerName;
        this.date = date;
        this.id = id;
        this.totalCost = totalCost;
        this.paymentType = paymentType;
        this.address = address;
    }
}
