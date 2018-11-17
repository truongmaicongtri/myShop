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
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Ionicons } from '@expo/vector-icons';
import * as actions from '../../actions';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            totalCost: 0
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({ dataSource: ds.cloneWithRows(newProps.cart) });
        this.setState({
            totalCost: newProps.cart.reduce((total, currentItem) =>
                total + (currentItem.amount * currentItem.item.cost), 0)
        });
    }

    handleIncrease(index) {
        this.props.inCreaseItem(index);
    }

    handleDecrease(index) {
        this.props.deCreaseItem(index);
    }

    renderRow(dataSource, sectionID, rowId) {
        return (
            <View style={styles.productContainer}>
                <Image source={dataSource.item.img[0]} style={styles.productImg} />
                <View style={styles.productInfo}>
                    <Text style={styles.textName}>{dataSource.item.name}</Text>
                    <NumberFormat
                        displayType={'text'}
                        value={dataSource.item.cost}
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
                                <Ionicons name="md-arrow-back" size={35} color="#B10D65" />
                            </TouchableOpacity>
                            <Text style={styles.title}>MY CART</Text>
                            <View style={{ width: 30 }} />
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
                    <TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
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
    cart: state.cart
});

export default connect(mapStateToProps, actions)(CartScreen);
