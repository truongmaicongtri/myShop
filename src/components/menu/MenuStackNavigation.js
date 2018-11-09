import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import UserInfoScreen from './UserInfoScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import CheckOutHistoryScreen from './UserCheckOutHistory';
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
  Login: LoginScreen,
  UserInfo: UserInfoScreen,
  ChangePassword: ChangePasswordScreen,
  CheckOutHistory: CheckOutHistoryScreen,
  RatingHistory: RatingHistoryScreen
},
  {
    headerMode: 'none'
  }
);
