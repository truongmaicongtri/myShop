import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image, ListView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartItem } from '../../models/CartItem';
import Item from '../../models/Item';
import productImage1 from '../../../src/drawable/detailProductImage/productImage1.jpg';
import productImage2 from '../../../src/drawable/detailProductImage/productImage2.jpg';
import productImage3 from '../../../src/drawable/detailProductImage/productImage3.jpg';
import productImage4 from '../../../src/drawable/detailProductImage/productImage4.jpg';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const cartItem1 = new CartItem(new Item('001', 'Product 001', 1500000,
    [productImage1, productImage1, productImage1], 'Hello! This is 001'), 1);
const cartItem2 = new CartItem(new Item('002', 'Product 002', 2500000,
    [productImage2, productImage2, productImage2], 'Hello! This is 002'), 3);
const cartItem3 = new CartItem(new Item('003', 'Product 003', 3500000,
    [productImage3, productImage3, productImage3], 'Hello! This is 003'), 2);
const cartItem4 = new CartItem(new Item('004', 'Product 004', 4500000,
    [productImage4, productImage4, productImage4], 'Hello! This is 004'), 1);

const cartItems = [cartItem1, cartItem2, cartItem3, cartItem4];
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class CartScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows(cartItems),
            totalCost: cartItems.reduce((accumulator, currentItem) =>
                accumulator + (currentItem.amount * currentItem.item.cost), 0)
        };
    }

    deleteRow(index) {
        cartItems.splice(index, 1);
        this.setState({ dataSource: ds.cloneWithRows(cartItems) });
    }

    changeAmount(rowIndex, action) {
        if (action === 'increase') {
            cartItems[rowIndex].amount++;
        }
        if (action === 'decrease') {
            cartItems[rowIndex].amount--;
        }
        if (cartItems[rowIndex].amount === 0) {
            this.deleteRow(rowIndex);
        } else {
            this.setState({ dataSource: ds.cloneWithRows(cartItems) });
        }
        this.setState({
            totalCost: cartItems.reduce((accumulator, currentItem) =>
                accumulator + (currentItem.amount * currentItem.item.cost), 0)
        });
    }

    renderRow(dataSource, sectionID, rowId) {
        return (
            <View style={styles.productContainer}>
                <Image source={dataSource.item.img[0]} style={styles.productImg} />
                <View style={styles.productInfo}>
                    <Text style={styles.textName}>{dataSource.item.name}</Text>
                    <Text style={styles.textPrice}>{dataSource.item.cost} VND</Text>
                    <Text style={styles.textMater}>Material: Cotton</Text>
                    <Text>Color: Black</Text>
                    <View style={styles.lastrowInfo}>
                        <View style={styles.add}>
                            <TouchableOpacity onPress={() => this.changeAmount(rowId, 'decrease')}>
                                <Text style={styles.textColor}>-</Text>
                            </TouchableOpacity >
                            <Text style={styles.textColor}>{dataSource.amount}</Text>
                            <TouchableOpacity onPress={() => this.changeAmount(rowId, 'increase')}>
                                <Text style={styles.textColor}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('DetailProduct',
                                    { item: dataSource.item })}
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
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name="md-arrow-back" size={25} color="#B10D65" />
                            </TouchableOpacity>
                            <Text style={styles.title}>List Cart</Text>
                            <View style={{ width: 30 }} />
                        </View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                        />
                    </View>
                </ScrollView>
                <View style={styles.checkout}>
                    <Text style={styles.txtTotal}>
                        Total cost:
                    </Text>
                    <Text style={styles.txtTotal}>{this.state.totalCost} VND</Text>
                    <TouchableOpacity>
                        <Ionicons name="md-checkmark-circle" size={32} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },

    title: {
        fontSize: 25,
        color: '#B10D65'
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

    textColor: {
        fontSize: 20,
        color: '#00A6AD'
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
        fontWeight: '400'
    },

    add: {
        flexDirection: 'row',
        width: width / 4,
        justifyContent: 'space-around',
        paddingTop: 10
    }

});

