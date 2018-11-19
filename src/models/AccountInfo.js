export default class AccountInfo {
    userName: string
    firstName: string;
    lastName: string;
    email: string;
    address: string;

    constructor(userName, firstName, lastName, email, address) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
    }
}
