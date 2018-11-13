import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Dimensions, Text } from 'react-native';
import HomeScreen from '../home/HomeScreen';
import CategoryScreen from '../category/CategoryScreen';
import DetailProductScreen from '../detailProducts/DetailProductsScreen';


const { height } = Dimensions.get('window');

export default class ProductStackNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ProductStackNavigation />
            </View>
        );
    }
}


const ProductStackNavigation = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Category: {
        screen: CategoryScreen,
    },
    DetailProduct: DetailProductScreen,
},
    {
        initialRouteName: 'Home',
        headerMode: 'screen',
    }
);
