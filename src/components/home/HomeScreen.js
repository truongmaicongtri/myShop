import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  ListView,
  Text,
} from 'react-native';
import HvCategoryWithSwiper from './homeView/Hv_CategoryWithSwiper';
import HvCategoryWithListItem from './homeView/Hv_CategoryWithListItem';
import HvCategoryWithAnImage from './homeView/Hv_CategoryWithAnImage';

import categoryView1 from '../../../src/drawable/categoryView/categoryView1.jpg';
import categoryView2 from '../../../src/drawable/categoryView/categoryView2.jpg';
import categoryView3 from '../../../src/drawable/categoryView/categoryView3.jpg';
import categoryView4 from '../../../src/drawable/categoryView/categoryView4.jpg';
import categoryView5 from '../../../src/drawable/categoryView/categoryView5.jpg';
import categoryView10 from '../../../src/drawable/categoryView/categoryView10.jpg';
import categoryView11 from '../../../src/drawable/categoryView/categoryView11.jpg';
import categoryView12 from '../../../src/drawable/categoryView/categoryView12.jpg';
import categoryView13 from '../../../src/drawable/categoryView/categoryView13.jpg';
import categoryView14 from '../../../src/drawable/categoryView/categoryView14.jpg';

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
import productImage11 from '../../../src/drawable/detailProductImage/productImage11.jpg';
import productImage12 from '../../../src/drawable/detailProductImage/productImage12.jpg';
import productImage13 from '../../../src/drawable/detailProductImage/productImage13.jpg';
import productImage14 from '../../../src/drawable/detailProductImage/productImage14.jpg';
import productImage15 from '../../../src/drawable/detailProductImage/productImage15.jpg';
import productImage16 from '../../../src/drawable/detailProductImage/productImage16.jpg';
import productImage17 from '../../../src/drawable/detailProductImage/productImage17.jpg';
import productImage18 from '../../../src/drawable/detailProductImage/productImage18.jpg';
import productImage19 from '../../../src/drawable/detailProductImage/productImage19.jpg';
import productImage20 from '../../../src/drawable/detailProductImage/productImage20.jpg';
import productImage21 from '../../../src/drawable/detailProductImage/productImage21.jpg';
import productImage22 from '../../../src/drawable/detailProductImage/productImage22.jpg';
import productImage23 from '../../../src/drawable/detailProductImage/productImage23.jpg';
import productImage24 from '../../../src/drawable/detailProductImage/productImage24.jpg';

import Item from '../../models/Item';
import { CategoryWithAnImage } from '../../models/CategoryWithAnImage';
import { CategoryWithListItem } from '../../models/CategoryWithListView';
import { CategoryWithSwiper } from '../../models/CategoryWithSwiper';

const item1 = new Item('001', 'Product 001', 1500000,
  [productImage1, productImage1, productImage1], 'Hello! This is 001');
const item2 = new Item('002', 'Product 002', 2500000,
  [productImage2, productImage2, productImage2], 'Hello! This is 002');
const item3 = new Item('003', 'Product 003', 3500000,
  [productImage3, productImage3, productImage3], 'Hello! This is 003');
const item4 = new Item('004', 'Product 004', 4500000,
  [productImage4, productImage4, productImage4], 'Hello! This is 004');
const item5 = new Item('005', 'Product 005', 5500000,
  [productImage5, productImage5, productImage5], 'Hello! This is 005');
const item6 = new Item('006', 'Product 006', 6500000,
  [productImage6, productImage6, productImage6], 'Hello! This is 006');
const item7 = new Item('007', 'Product 007', 7500000,
  [productImage7, productImage7, productImage7], 'Hello! This is 007');
const item8 = new Item('008', 'Product 008', 8500000,
  [productImage8, productImage8, productImage8], 'Hello! This is 008');
const item9 = new Item('009', 'Product 009', 9500000,
  [productImage9, productImage9, productImage9], 'Hello! This is 009');
const item10 = new Item('010', 'Product 010', 10500000,
  [productImage10, productImage10, productImage10], 'Hello! This is 010');
const item11 = new Item('011', 'Product 011', 10500000,
  [productImage11, productImage11, productImage11], 'Hello! This is 011');
const item12 = new Item('012', 'Product 012', 10500000,
  [productImage12, productImage12, productImage12], 'Hello! This is 012');
const item13 = new Item('013', 'Product 013', 10500000,
  [productImage13, productImage13, productImage13], 'Hello! This is 013');
const item14 = new Item('014', 'Product 014', 10500000,
  [productImage14, productImage14, productImage14], 'Hello! This is 014');
const item15 = new Item('015', 'Product 015', 10500000,
  [productImage15, productImage15, productImage15], 'Hello! This is 015');
const item16 = new Item('016', 'Product 016', 10500000,
  [productImage16, productImage16, productImage16], 'Hello! This is 016');
const item17 = new Item('017', 'Product 017', 10500000,
  [productImage17, productImage17, productImage17], 'Hello! This is 017');
const item18 = new Item('018', 'Product 018', 10500000,
  [productImage18, productImage18, productImage18], 'Hello! This is 018');
const item19 = new Item('019', 'Product 019', 10500000,
  [productImage19, productImage19, productImage19], 'Hello! This is 019');
const item20 = new Item('020', 'Product 020', 10500000,
  [productImage20, productImage20, productImage20], 'Hello! This is 020');

const categories = [];

//list category:
const category1 = new CategoryWithAnImage('SPRING COLLECTION', 'oneView', [
  item1, item2, item3, item4, item5, item6
], categoryView1);

const category2 = new CategoryWithSwiper('ALL PRODUCTS', 'swiper', [
  item1, item2, item3, item4, item5, item6, item7, item8
], [categoryView2, categoryView3, categoryView4, categoryView5]);

const category3 = new CategoryWithListItem('HOT ITEMS', 'listItem', [
  item6, item7, item8, item9, item10
]);
const category4 = new CategoryWithAnImage('NEW PRODUCTS', 'oneView', [
  item11, item12, item13, item14
], categoryView10);
const category5 = new CategoryWithSwiper('ACCESSORIES', 'swiper', [
  item19, item20, item15, item16, item17, item18
], [categoryView11, categoryView12, categoryView13, categoryView14]);


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    categories.push(category1);
    categories.push(category4);
    categories.push(category5);
    categories.push(category2);
    categories.push(category3);

    const data = categories;

    this.state = {
      dataSource: ds.cloneWithRows(data)
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
