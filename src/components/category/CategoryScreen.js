import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    ListView
} from 'react-native';
import NumberFormat from 'react-number-format';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CartItem from '../../models/CartItem';

class CategoryScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        console.log('call category');
        super(props);
        const category = this.props.navigation.getParam('category');
        this.fetchProduct(category.categoryid);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        };
    }

    async fetchProduct(categoryid) {
        const url = 'http://192.168.1.12/my_shop_webservice/getProduct.php?categoryid=' + categoryid;
        const response = await fetch(url, { method: 'POST', body: null });
        const products = await response.json();

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(products)
        });
    }

    handleAddToCart(cartItem) {
        this.props.addToCart(cartItem);
    }

    renderRow(product) {
        return (
            <View style={styles.productContainer}>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('DetailProduct',
                            { item: product })}
                    delayPressIn={100}
                >
                    <Image source={{ uri: product.productimgs[0] }} style={styles.productImg} />
                </TouchableOpacity>

                <View style={styles.productInfo}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('DetailProduct',
                                { item: product })}
                    >
                        <Text style={styles.textName}>{product.productname}</Text>
                    </TouchableOpacity>
                    <NumberFormat
                        displayType={'text'}
                        value={product.price}
                        thousandSeparator=','
                        renderText={value => <Text style={styles.textPrice}>{value} VND</Text>}
                    />
                    <Text style={styles.textMater}>Material: Cotton</Text>
                    <Text>Color: Black</Text>
                </View>
                <TouchableOpacity
                    style={styles.iconstyle}
                    onPress={() => this.handleAddToCart(new CartItem(product, 1))}
                >
                    <Ionicons name="ios-cart" size={30} color="#B10D65" />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const category = this.props.navigation.getParam('category');
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.screen}>
                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={{ width: 50 }}
                            >
                                <Ionicons name="md-arrow-back" size={35} color="#B10D65" />
                            </TouchableOpacity>
                            <Text style={styles.title}>{category.categoryname}</Text>
                            <View style={{ width: 30 }} />
                        </View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
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
        paddingBottom: 100

    },

    productImg: {
        width: 150,
        height: (150 / 783) * 1200,
    },

    lastrowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        fontSize: 10,
        color: '#B10D65',
        marginTop: 20
    },

    iconstyle: {
        justifyContent: 'flex-end'
    }
});

export default connect(null, actions)(CategoryScreen);
