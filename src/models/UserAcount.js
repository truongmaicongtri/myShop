import OrderHistory from './OrderHistory';
import AccountInfo from './AccountInfo';
import RatingHistory from './UserRatingHistory';


export class UserAccount {
    id: string;
    password: string;
    accountInfo: AccountInfo;
    ordersHistory: List<OrderHistory>;
    ratingHistory: List<RatingHistory>;


    constructor(id, password, accountInfo, ordersHistory, ratingHistory) {
        this.id = id;
        this.password = password;
        this.accountInfo = accountInfo;
        this.ordersHistory = ordersHistory;
        this.ratingHistory = ratingHistory;
    }
} 
