import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { View, Dimensions } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../home/HomeScreen';
import NotifyScreen from '../notify/NotifyScreen';
import CartScreen from '../cart/CartScreen';
import ContactScreen from '../contact/ContactScreen';
import CategoryScreen from '../category/CategoryScreen';
import DetailProductScreen from '../detailProducts/DetailProducts';
import TopBar from './TopBar';

const { height } = Dimensions.get('window');

export default class AppTabNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TopBar open={this.props.open} />
                <BottomtabNavigator />
            </View>
        );
    }
}


const ProductStackNavigator = createStackNavigator({
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

const BottomtabNavigator = createMaterialTopTabNavigator(
    {
        HomeInStackNavigator: {
            screen: ProductStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="home" size={20} color={tintColor} />
                )
            }
        },
        CartScreen: {
            screen: CartScreen,
            navigationOptions: {
                tabBarLabel: ' Cart',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-cart" size={20} color={tintColor} />
                ),
            }
        },
        Contact: {
            screen: ContactScreen,
            navigationOptions: {
                tabBarLabel: 'Contact',
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="contacts" size={20} color={tintColor} />
                )
            }
        },
        NotifyScreen: {
            screen: NotifyScreen,
            navigationOptions: {
                tabBarLabel: 'Notification',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-notifications-outline" size={20} color={tintColor} />
                )
            }
        }
    },
    {
        initialRouteName: 'HomeInStackNavigator',
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#83bbfc',
            indicatorStyle: {
                height: 0
            },
            style: {
                backgroundColor: '#3c95fc',
                borderTopWidth: 1,
                borderTopColor: 'grey',
            },
            tabStyle: { height: height / 10 },
            labelStyle: {
                fontSize: 8,
                justifyContent: 'center',
                marginBottom: 0,
            },
            showIcon: true
        }
        // activeColor: '#8e54e5',
        // inactiveColor: '#d2bfef',
        // barStyle: { backgroundColor: '#e2e2e2' },
    }
);

