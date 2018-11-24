import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import MenuScreen from './MenuScreen';
import LoginScreen from './LoginScreen';
import UserControlScreen from './UserControlScreen';
import UserInfoScreen from './UserInfoScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import UserPurchaseHistory from './UserPurchaseHistory';
import RatingHistoryScreen from './UserRatingHistory';

export default class MenuStackNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MenuStackNavigator />
    );
  }
}

const MenuStackNavigator = createStackNavigator({
  Menu: MenuScreen,
  Login: LoginScreen,
  UserControl: UserControlScreen,
  UserInfo: UserInfoScreen,
  ChangePassword: ChangePasswordScreen,
  PurchaseHistory: UserPurchaseHistory,
  RatingHistory: RatingHistoryScreen
},
  {
    initialRouteName: 'Menu',
    headerMode: 'none'
  }
);
