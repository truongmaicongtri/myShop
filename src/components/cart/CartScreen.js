import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Img1 from '../../../src/drawable/8.jpg';
import Img2 from '../../../src/drawable/9.jpg';
import Img3 from '../../../src/drawable/10.jpg';
import Img4 from '../../../src/drawable/11.jpg';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');


export default class CartScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.screen}>
                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name="md-arrow-back" size={35} color="#B10D65" />
                            </TouchableOpacity>
                            <Text style={styles.title}>List Cart</Text>
                            <View style={{ width: 30 }} />
                        </View>
                        <View style={styles.productContainer}>
                            <Image source={Img1} style={styles.productImg} />
                            <View style={styles.productInfo}>
                                <Text style={styles.textName}>PRODUCT NAME</Text>
                                <Text style={styles.textPrice}>1.000.000 VND</Text>
                                <Text style={styles.textMater}>Material: Cotton</Text>
                                <Text>Color: Black</Text>
                                <View style={styles.lastrowInfo}>
                                    <TouchableOpacity>
                                        <Text style={styles.textColor}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textColor}>1</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.textColor}>+</Text>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            backgroundColor: 'cyan',
                                            width: 15,
                                            height: 15,
                                            borderRadius: 15
                                        }}
                                    />
                                    <TouchableOpacity>
                                        <Text style={styles.textDetail}>SHOW DETAIL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productContainer}>
                            <Image source={Img2} style={styles.productImg} />
                            <View style={styles.productInfo}>
                                <Text style={styles.textName}>PRODUCT NAME</Text>
                                <Text style={styles.textPrice}>1.000.000 VND</Text>
                                <Text style={styles.textMater}>Material: Cotton</Text>
                                <Text>Color: Black</Text>
                                <View style={styles.lastrowInfo}>
                                    <TouchableOpacity>
                                        <Text style={styles.textColor}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textColor}>1</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.textColor}>+</Text>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            backgroundColor: 'cyan',
                                            width: 15,
                                            height: 15,
                                            borderRadius: 15
                                        }}
                                    />
                                    <TouchableOpacity>
                                        <Text style={styles.textDetail}>SHOW DETAIL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productContainer}>
                            <Image source={Img3} style={styles.productImg} />
                            <View style={styles.productInfo}>
                                <Text style={styles.textName}>PRODUCT NAME</Text>
                                <Text style={styles.textPrice}>1.000.000 VND</Text>
                                <Text style={styles.textMater}>Material: Cotton</Text>
                                <Text>Color: Black</Text>
                                <View style={styles.lastrowInfo}>
                                    <TouchableOpacity>
                                        <Text style={styles.textColor}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textColor}>1</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.textColor}>+</Text>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            backgroundColor: 'cyan',
                                            width: 15,
                                            height: 15,
                                            borderRadius: 15
                                        }}
                                    />
                                    <TouchableOpacity>
                                        <Text style={styles.textDetail}>SHOW DETAIL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productContainer}>
                            <Image source={Img4} style={styles.productImg} />
                            <View style={styles.productInfo}>
                                <Text style={styles.textName}>PRODUCT NAME</Text>
                                <Text style={styles.textPrice}>1.000.000 VND</Text>
                                <Text style={styles.textMater}>Material: Cotton</Text>
                                <Text>Color: Black</Text>
                                <View style={styles.lastrowInfo}>
                                    <TouchableOpacity>
                                        <Text style={styles.textColor}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textColor}>1</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.textColor}>+</Text>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            backgroundColor: 'cyan',
                                            width: 15,
                                            height: 15,
                                            borderRadius: 15
                                        }}
                                    />
                                    <TouchableOpacity>
                                        <Text style={styles.textDetail}>SHOW DETAIL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.checkout}>
                    <Text style={styles.txtTotal}>
                        Total cost
                    </Text>
                    <Text style={styles.txtTotal}>1.000.000 VND</Text>
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
        fontSize: 30,
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
        elevation: 5
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
    }

});

