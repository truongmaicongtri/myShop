import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  ListView,
  Text,
} from 'react-native';

import * as data from '../../data';

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
      dataSource: ds.cloneWithRows(data.categories)
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
      <ScrollView
        style={styles.screen}
      >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
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
