import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import Shop from './src/components/main/Shop';
import store from './src/store/store';

export default class MyShop extends Component {
  render() {
    return (
      <Provider store={store}>
        <Shop />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyShop', () => MyShop);
