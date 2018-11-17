import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { View, Dimensions, Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import ProductStackNavigator from './ProductStackNavigator';
import NotifyScreen from '../notify/NotifyScreen';
import CartScreen from '../cart/CartScreen';
import ContactScreen from '../contact/ContactScreen';
import TopBar from './TopBar';

const { height } = Dimensions.get('window');

class BottomBarNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TopBar {...this.props} navigate={this.props.navigation.navigate} />
                <BottomtabNavigator
                    screenProps={{ numberOfCartItem: this.props.numberOfCartItem }}
                />
            </View>
        );
    }
}

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
            navigationOptions: ({ screenProps }) => ({
                tabBarLabel: ' Cart',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Ionicons name="ios-cart" size={20} color={tintColor} />
                        <View
                            style={{
                                opacity: screenProps.numberOfCartItem > 0 ? 100 : 0,
                                position: 'absolute',
                                width: 12,
                                height: 12,
                                borderRadius: 10,
                                backgroundColor: '#B10D65',
                                justifyContent: 'center',
                                borderColor: '#fff',
                                borderWidth: 0.5,
                                left: 9,
                                top: -1
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 8,
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {screenProps.numberOfCartItem}
                            </Text>
                        </View>

                    </View>
                ),
            })
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
                    <View>
                        <Ionicons name="ios-notifications-outline" size={20} color={tintColor} />
                        <View
                            style={{
                                position: 'absolute',
                                width: 12,
                                height: 12,
                                borderRadius: 10,
                                backgroundColor: '#B10D65',
                                justifyContent: 'center',
                                borderColor: '#fff',
                                borderWidth: 0.5,
                                right: -4,
                                top: 0
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 8,
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                3
                            </Text>
                        </View>

                    </View>
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
const mapStateToProps = state => ({
    numberOfCartItem: state.cart.length
});

export default connect(mapStateToProps, null)(BottomBarNavigator);
