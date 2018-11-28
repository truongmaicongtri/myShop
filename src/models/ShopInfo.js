export default class ShopInfo {
    latitude: number;
    longitude: number;
    address: string;
    phoneNumber: string;
    email: string;
    mobile: string;

    constructor(latitude, longitude, address, phoneNumber, email, mobile) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.mobile = mobile;
    }
} 
