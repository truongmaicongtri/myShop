import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import AllProductView from './homeItem/AllProductView';
import TopProductView from './homeItem/TopProductView';
import Collection1View from './homeItem/Collection1View';
import Img1 from '../../drawable/13.jpg';
import Img2 from '../../drawable/14.jpg';
import Img3 from '../../drawable/15.jpg';

import Img5 from '../../../src/drawable/8.jpg';
import Img6 from '../../../src/drawable/9.jpg';
import Img7 from '../../../src/drawable/10.jpg';
import Img4 from '../../../src/drawable/11.jpg';
import Img8 from '../../../src/drawable/16.jpg';
import Img9 from '../../../src/drawable/17.jpg';
import Img10 from '../../../src/drawable/18.jpg';
import Img11 from '../../../src/drawable/19.jpg';

const category1 = {
  name: 'SPRING COLLECTION',
  listItem: [
    {
      id: '001',
      name: 'Product 001',
      cost: '1.500.000',
      img: [Img1, Img2, Img3],
      detail: 'Hello! This is 001',
    },
    {
      id: '002',
      name: 'Product 002',
      cost: '1.500.000',
      img: [Img2, Img3, Img4],
      detail: 'Hello! This is 002',
    },
    {
      id: '003',
      name: 'Product 003',
      cost: '1.500.000',
      img: [Img3, Img4, Img5],
      detail: 'Hello! This is 003',
    },
    {
      id: '004',
      name: 'Product 004',
      cost: '1.500.000',
      img: [Img4, Img5, Img6],
      detail: 'Hello! This is 004',
    },
    {
      id: '005',
      name: 'Product 005',
      cost: '1.500.000',
      img: [Img5, Img6, Img7],
      detail: 'Hello! This is 005',
    },
    {
      id: '006',
      name: 'Product 006',
      cost: '1.500.000',
      img: [Img7, Img8, Img9],
      detail: 'Hello! This is 006',
    },
  ]
};

const category2 = {
  name: 'ALL PRODUCTS',
  listItem: [
    {
      id: '001',
      name: 'Product 001',
      cost: '1.500.000',
      img: [Img1, Img2, Img3],
      detail: 'Hello! This is 001',
    },
    {
      id: '002',
      name: 'Product 002',
      cost: '1.500.000',
      img: [Img2, Img3, Img4],
      detail: 'Hello! This is 002',
    },
    {
      id: '003',
      name: 'Product 003',
      cost: '1.500.000',
      img: [Img3, Img4, Img5],
      detail: 'Hello! This is 003',
    },
    {
      id: '004',
      name: 'Product 004',
      cost: '1.500.000',
      img: [Img4, Img5, Img6],
      detail: 'Hello! This is 004',
    },
    {
      id: '005',
      name: 'Product 005',
      cost: '1.500.000',
      img: [Img5, Img6, Img7],
      detail: 'Hello! This is 005',
    },
    {
      id: '006',
      name: 'Product 006',
      cost: '1.500.000',
      img: [Img7, Img8, Img9],
      detail: 'Hello! This is 006',
    },
    {
      id: '007',
      name: 'Product 007',
      cost: '1.500.000',
      img: [Img8, Img9, Img10],
      detail: 'Hello! This is 007',
    },
    {
      id: '008',
      name: 'Product 008',
      cost: '1.500.000',
      img: [Img9, Img10, Img11],
      detail: 'Hello! This is 008',
    },
  ]
};
const category3 = {
  name: 'TOP PRODUCTS',
  listItem: [
    {
      id: '002',
      name: 'Product 002',
      cost: '1.500.000',
      img: [Img2, Img3, Img4],
      detail: 'Hello! This is 002',
    },
    {
      id: '004',
      name: 'Product 004',
      cost: '1.500.000',
      img: [Img4, Img5, Img6],
      detail: 'Hello! This is 004',
    },
    {
      id: '005',
      name: 'Product 005',
      cost: '1.500.000',
      img: [Img5, Img6, Img7],
      detail: 'Hello! This is 005',
    },
    {
      id: '008',
      name: 'Product 008',
      cost: '1.500.000',
      img: [Img9, Img10, Img11],
      detail: 'Hello! This is 008',
    },
  ]
};

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

        <Collection1View
          {...this.props}
          navigate={this.props.navigation.navigate}
          category={category1}
        />

        <AllProductView
          {...this.props}
          navigate={this.props.navigation.navigate}
          category={category2}
        />

        <TopProductView
          {...this.props}
          navigate={this.props.navigation.navigate}
          category={category3}
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
//<Collection />
//<Category />
