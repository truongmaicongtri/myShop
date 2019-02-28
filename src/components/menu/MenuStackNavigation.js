import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import MenuScreen from './MenuScreen';
import LoginScreen from './LoginScreen';
import UserControlScreen from './UserControlScreen';
import UserInfoScreen from './UserInfoScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import UserOrderHistoryScreen from './UserOrderHistory';
import RatingHistoryScreen from './UserRatingHistory';
import RegisterScreen from './RegisterScreen';

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
  Register: RegisterScreen,
  UserControl: UserControlScreen,
  UserInfo: UserInfoScreen,
  ChangePassword: ChangePasswordScreen,
  UserOrderHistory: UserOrderHistoryScreen,
  RatingHistory: RatingHistoryScreen
},
  {
    initialRouteName: 'Menu',
    headerMode: 'none'
  }
);
