import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import CartScreen from './CartScreen';
import DetailProductScreen from '../detailProducts/DetailProductsScreen';


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
    Cart: {
        screen: CartScreen,
    },
    DetailProduct: DetailProductScreen,
},
    {
        initialRouteName: 'Cart',
        headerMode: 'screen',
    }
);
