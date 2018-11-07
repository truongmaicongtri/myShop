import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import UserInfoScreen from './UserInfoScreen';
import ChangePasswordScreen from './ChangePasswordScreen';

export default createStackNavigator({
    Login: LoginScreen,
    UserInfo: UserInfoScreen,
    ChangePassword: ChangePasswordScreen
},
    {
        headerMode: 'none'
    }
);
