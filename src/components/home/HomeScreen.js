import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  ListView,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo';
import { currentShop } from '../../data';


import HvCategoryWithSwiper from './homeView/Hv_CategoryWithSwiper';
import HvCategoryWithListItem from './homeView/Hv_CategoryWithListItem';
import HvCategoryWithAnImage from './homeView/Hv_CategoryWithAnImage';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    };
  }

  async componentWillMount() {
    const url = 'http://192.168.1.12/my_shop_webservice/getHomeScreen.php?shopid=shop01';
    const response = await fetch(url, { method: 'POST', body: null });
    const json = await response.json();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(json)
    });
  }

  renderRow(category) {
    switch (category.displayview) {
      case 'oneview':
        return (
          <HvCategoryWithAnImage {...this.props} category={category} />
        );
      case 'swiper':
        return (
          <HvCategoryWithSwiper {...this.props} category={category} />
        );
      case 'listitem':
        return (
          <HvCategoryWithListItem {...this.props} category={category} />
        );
      default:
        return (
          <Text>Có lỗi xảy ra, không thể upload Category</Text>
        );
    }
  }

  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#dbf0ff', '#eaafc8']}
        style={styles.screen}
      >
        <ScrollView
          style={styles.screen}
        >
          <ListView
            style={{ marginBottom: 10 }}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </ScrollView >
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: '#dbf0ff'
  },
});
