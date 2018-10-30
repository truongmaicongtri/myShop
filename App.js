import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Shop from './src/components/Main/Shop';

export default class MyShop extends Component {
  render() {
    return (
      <Shop />
    );
  }
}

AppRegistry.registerComponent('MyShop', () => MyShop);
