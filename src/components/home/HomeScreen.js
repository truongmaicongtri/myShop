import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AllProductView from './homeItem/AllProductView';
import TopProductView from './homeItem/TopProductView';
import Collection1View from './homeItem/Collection1View';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  state = {
    scrollBegin: false
  }

  onScrollStart = () => {
    this.setState({ scrollBegin: true });
  }
  onScrollEnd = () => {
    this.setState({ scrollBegin: false });
  }

  render() {
    return (
      <ScrollView
        style={styles.screen}
        onScrollBeginDrag={this.onScrollStart}
        onScrollEndDrag={this.onScrollEnd}
      >

        <Collection1View {...this.props} navigate={this.props.navigation.navigate} />

        <AllProductView {...this.props} navigate={this.props.navigation.navigate} />

        <TopProductView {...this.props} navigate={this.props.navigation.navigate} />

      </ScrollView >
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#dbf0ff'
  },
});
//<Collection />
//<Category />
