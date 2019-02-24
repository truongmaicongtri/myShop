﻿import React, { Component } from 'react';
import {
    View, ToastAndroid,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image, ListView
} from 'react-native';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Ionicons } from '@expo/vector-icons';
import * as actions from '../../actions';
import { CREATE_ORDER_URL } from '../../backend/url';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
class CartScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            dataSource: ds.cloneWithRows([]),
            totalCost: 0,
            isLogin: false,
            username: ''
        };
    }

    componentWillReceiveProps(newProps) {
        const productList = [];
        newProps.cart.forEach((i) => {
            productList.push({ productName: i.item.productname, amount: i.amount });
        });
        console.log(productList);

        this.setState({
            dataSource: ds.cloneWithRows(newProps.cart),
            cart: productList,
            shopId: newProps.shopId,
            isLogin: newProps.login.isLogin,
            username: newProps.login.username,
            totalCost: newProps.cart.reduce((total, currentItem) =>
                total + (currentItem.amount * currentItem.item.price), 0)
        });
    }

    handleIncrease(index) {
        this.props.inCreaseItem(index);
    }

    handleDecrease(index) {
        this.props.deCreaseItem(index);
    }

    handleMakeOrderButtonPressed() {
        const { cart, isLogin } = this.state;
        if (cart.length < 1) {
            ToastAndroid.show('Your cart is empty!', ToastAndroid.SHORT);
        } else if (!isLogin) {
            ToastAndroid.show('Please login before make order!', ToastAndroid.SHORT);
        } else {
            this.makeOrder();
        }
    }

    async makeOrder() {
        const dataObj = {
            orderTime: new Date(),
            amount: this.state.totalCost,
            paymentType: 'COD',
            shopId: this.state.shopId,
            user_name: this.state.username,
            cart: this.state.cart
        };
        const response = await fetch(CREATE_ORDER_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });
        const state = await response.json();

        if (state === 'OK') {
            ToastAndroid.show('Your order has been created successfully.', ToastAndroid.LONG);
            this.cleanCart();
        }
    }

    cleanCart() {
        this.props.cleanCart();
    }

    renderRow(dataSource, sectionID, rowId) {
        return (
            <View style={styles.productContainer}>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('DetailProduct',
                            { item: dataSource.item })}
                    delayPressIn={100}
                >
                    <Image source={{ uri: dataSource.item.productimgs[0] }} style={styles.productImg} />
                </TouchableOpacity>
                <View style={styles.productInfo}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('DetailProduct',
                                { item: dataSource.item })}
                    >
                        <Text style={styles.textName}>{dataSource.item.productname}</Text>
                    </TouchableOpacity>
                    <NumberFormat
                        displayType={'text'}
                        value={dataSource.item.price}
                        thousandSeparator=','
                        renderText={value => <Text style={styles.textPrice}>{value} VND</Text>}
                    />
                    <Text style={styles.textMater}>Material: Cotton</Text>
                    <Text>Color: Black</Text>
                    <View style={styles.lastrowInfo}>
                        <View style={styles.amount}>
                            <TouchableOpacity onPress={() => this.handleDecrease(rowId)}>
                                <View style={styles.amountItem}>
                                    <Text style={styles.textAmount}>-</Text>
                                </View>
                            </TouchableOpacity >
                            <View style={styles.amountItem}>
                                <Text style={styles.textAmount}>{dataSource.amount}</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.handleIncrease(rowId)}>
                                <View style={styles.amountItem}>
                                    <Text style={styles.textAmount}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('DetailProduct', { item: dataSource.item });
                            }}
                        >
                            <Text style={styles.textDetail}>SHOW DETAIL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.screen}>
                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <Text style={styles.title}>MY CART</Text>
                        </View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                            enableEmptySections
                        />
                    </View>
                </ScrollView>
                <View style={styles.checkout}>
                    {/* <Text style={styles.txtTotal}>
                        Total cost:
                    </Text> */}
                    <View style={{ flex: 1 }}>
                        <NumberFormat
                            displayType={'text'}
                            value={this.state.totalCost}
                            thousandSeparator=','
                            renderText={value => <Text style={styles.txtTotal}>{value} VND</Text>}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.handleMakeOrderButtonPressed()}>
                        <Ionicons name="ios-checkmark-circle-outline" size={32} color="#ff0066" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 6,
        backgroundColor: '#dbf0ff',
    },

    wrapper: {
        backgroundColor: '#fff',
        margin: 10,
        paddingHorizontal: 10,
        elevation: 5
    },

    header: {
        height: 50,
        justifyContent: 'center',
        padding: 5,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        color: '#B10D65',
        textAlign: 'center'
    },

    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#D6D6D6',
        borderWidth: 1,
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        justifyContent: 'space-around',
    },

    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1,
        paddingVertical: 20
    },

    productImg: {
        width: 150,
        height: (150 / 783) * 1200,
    },

    lastrowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    textName: {
        fontSize: 20,
        fontWeight: '400',
        color: '#BCBCBC',
    },

    textPrice: {
        color: '#B10D65'
    },

    textMater: {

    },

    textAmount: {
        fontSize: 20,
        color: '#00A6AD',
        textAlign: 'center'
    },

    textDetail: {
        fontSize: 8,
        color: '#B10D65',
        // width: width / 5,
        marginTop: 50,
        // paddingLeft: 20
    },

    checkout: {
        height: height / 10,
        flexDirection: 'row',
        backgroundColor: '#9bbff7',
        justifyContent: 'space-between',
        padding: 15,
        elevation: 5
    },

    txtTotal: {
        color: '#3c95fc',
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'center'
    },

    amount: {
        flexDirection: 'row',
        width: width / 4,
        height: width / 8,
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    amountItem: {
        width: width / 12,
        height: width / 8,
    }
});

const mapStateToProps = state => ({
    cart: state.cart,
    login: state.login,
    shopId: state.shop.shopId
});

export default connect(mapStateToProps, actions)(CartScreen);
