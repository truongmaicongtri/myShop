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

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(currentShop.listCategories)
    };
  }
  renderRow(dataSource) {
    switch (dataSource.viewDisplay) {
      case 'oneView':
        return (
          <HvCategoryWithAnImage {...this.props} category={dataSource} />
        );
      case 'swiper':
        return (
          <HvCategoryWithSwiper {...this.props} category={dataSource} />
        );
      case 'listItem':
        return (
          <HvCategoryWithListItem {...this.props} category={dataSource} />
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
