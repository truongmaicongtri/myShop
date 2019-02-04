import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
// import SplashScreen from 'react-native-smart-splash-screen';
import Shop from './src/components/main/Shop';
import store from './src/store/store';

export default class MyShop extends Component {
  componentDidMount() {
    // SplashScreen.close({
    //   animationType: SplashScreen.animationType.scale,
    //   duration: 850,
    //   delay: 500,
    // });
  }
  render() {
    return (
      <Provider store={store}>
        <Shop />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyShop', () => MyShop);
