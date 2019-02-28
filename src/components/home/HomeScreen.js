import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView, View,
  ListView, Dimensions,
  Text, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { GET_CATEGORY_URL } from '../../backend/url';


import HvCategoryWithSwiper from './homeView/Hv_CategoryWithSwiper';
import HvCategoryWithListItem from './homeView/Hv_CategoryWithListItem';
import HvCategoryWithAnImage from './homeView/Hv_CategoryWithAnImage';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }
  constructor(props) {
    super(props);

    this.state = {
      shopId: '',
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    };
  }

  componentDidMount() {
    this.callApi();
  }

  async callApi() {
    const url = GET_CATEGORY_URL(this.props.shopId);
    const response = await fetch(url, { method: 'GET', body: null });
    const categories = await response.json();
    this.updateListView(categories);
  }

  updateListView(categories) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(categories)
    });
  }

  handleExitButton() {
    this.props.exitShop();
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
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections
          />
          <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
              <TouchableOpacity
                onPress={() => this.handleExitButton()}
              >
                <Text style={styles.textStyle}>EXIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView >
      </LinearGradient>
    );
  }
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: '#dbf0ff'
  },
  container: {
    height: height / 11,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 5,
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 25,
    color: '#AFAEAF'
  },
});

const mapStateToProps = state => ({
  shopId: state.shop.shopId
});

export default connect(mapStateToProps, actions)(HomeScreen);
