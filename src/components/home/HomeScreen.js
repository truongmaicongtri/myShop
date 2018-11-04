import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  ListView,
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import HvCategoryWithSwiper from './homeView/Hv_CategoryWithSwiper';
import HvCategoryWithListItem from './homeView/Hv_CategoryWithListItem';
import HvCategoryWith1ImageView from './homeView/Hv_CategoryWith1ImageView';

import categoryView1 from '../../../src/drawable/categoryView/categoryView1.jpg';
import categoryView2 from '../../../src/drawable/categoryView/categoryView2.jpg';
import categoryView3 from '../../../src/drawable/categoryView/categoryView3.jpg';
import categoryView4 from '../../../src/drawable/categoryView/categoryView4.jpg';
import categoryView5 from '../../../src/drawable/categoryView/categoryView5.jpg';

import productImage1 from '../../../src/drawable/detailProductImage/productImage1.jpg';
import productImage2 from '../../../src/drawable/detailProductImage/productImage2.jpg';
import productImage3 from '../../../src/drawable/detailProductImage/productImage3.jpg';
import productImage4 from '../../../src/drawable/detailProductImage/productImage4.jpg';
import productImage5 from '../../../src/drawable/detailProductImage/productImage5.jpg';
import productImage6 from '../../../src/drawable/detailProductImage/productImage6.jpg';
import productImage7 from '../../../src/drawable/detailProductImage/productImage7.jpg';
import productImage8 from '../../../src/drawable/detailProductImage/productImage8.jpg';
import productImage9 from '../../../src/drawable/detailProductImage/productImage9.jpg';
import productImage10 from '../../../src/drawable/detailProductImage/productImage10.jpg';

import Item from '../../models/Item';
import { CategoryWith1ImageView } from '../../models/CategoryWith1ImageView';
import { CategoryWithSwiper } from '../../models/CategoryWithSwiper';
import { CategoryWithListItem } from '../../models/CategoryWithListView';

const item1 = new Item('001', 'Product 001', '1.500.000',
  [productImage1, productImage1, productImage1], 'Hello! This is 001');
const item2 = new Item('002', 'Product 002', '2.500.000',
  [productImage2, productImage2, productImage2], 'Hello! This is 002');
const item3 = new Item('003', 'Product 003', '3.500.000',
  [productImage3, productImage3, productImage3], 'Hello! This is 003');
const item4 = new Item('004', 'Product 004', '4.500.000',
  [productImage4, productImage4, productImage4], 'Hello! This is 004');
const item5 = new Item('005', 'Product 005', '5.500.000',
  [productImage5, productImage5, productImage5], 'Hello! This is 005');
const item6 = new Item('006', 'Product 006', '6.500.000',
  [productImage6, productImage6, productImage6], 'Hello! This is 006');
const item7 = new Item('007', 'Product 007', '7.500.000',
  [productImage7, productImage7, productImage7], 'Hello! This is 007');
const item8 = new Item('008', 'Product 008', '8.500.000',
  [productImage8, productImage8, productImage8], 'Hello! This is 008');
const item9 = new Item('009', 'Product 009', '9.500.000',
  [productImage9, productImage9, productImage9], 'Hello! This is 009');
const item10 = new Item('010', 'Product 010', '10.500.000',
  [productImage10, productImage10, productImage10], 'Hello! This is 010');

const categories = [];

//list category:
const category1 = new CategoryWith1ImageView('SPRING COLLECTION', 'oneView', [
  item1, item2, item3, item4, item5, item6
], categoryView1);

const category2 = new CategoryWithSwiper('ALL PRODUCTS', 'swiper', [
  item1, item2, item3, item4, item5, item6, item7, item8
], [categoryView1, categoryView2, categoryView3, categoryView4]);

const category3 = new CategoryWithListItem('HOT ITEMS', 'listItem', [
  item6, item7, item8, item9, item10
]);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    categories.push(category1);
    categories.push(category2);
    categories.push(category3);

    const data = categories;

    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }
  renderRow(dataSource) {
    const { navigation } = this.props;
    switch (dataSource.viewDisplay) {
      case 'oneView':
        return (
          <HvCategoryWith1ImageView {...this.props} category={dataSource} />
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
