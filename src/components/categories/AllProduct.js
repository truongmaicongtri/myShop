import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Img1 from '../../drawable/13.jpg';
import Img2 from '../../drawable/14.jpg';
import Img3 from '../../drawable/15.jpg';

import Img5 from '../../../src/drawable/8.jpg';
import Img6 from '../../../src/drawable/9.jpg';
import Img7 from '../../../src/drawable/10.jpg';
import Img4 from '../../../src/drawable/11.jpg';
import Img8 from '../../../src/drawable/16.jpg';
import Img9 from '../../../src/drawable/17.jpg';
import Img10 from '../../../src/drawable/18.jpg';
import Img11 from '../../../src/drawable/19.jpg';


const item1 = {
    id: '002',
    name: 'Product 002',
    cost: '1.500.000',
    img: [Img1, Img2, Img3],
    detail: 'Hello! This is 002',
};
export default class Collection1 extends Component {
    static navigationOptions = {
        header: null
    }

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
                            <Text style={styles.title}>CATEGORYs</Text>
                            <View style={{ width: 30 }} />
                        </View>
                        <View style={styles.productContainer}>
                            <Image source={Img5} style={styles.productImg} />
                            <View style={styles.productInfo}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate('DetailProduct',
                                            { item: item1 })}
                                >
                                    <Text style={styles.textName}>PRODUCT NAME</Text>
                                </TouchableOpacity>
                                <Text style={styles.textPrice}>1.000.000 VND</Text>
                                <Text style={styles.textMater}>Material: Cotton</Text>
                                <Text>Color: Black</Text>
                            </View>
                            <TouchableOpacity style={styles.iconstyle}>
                                <Ionicons name="ios-cart" size={30} color="#B10D65" />
                            </TouchableOpacity>
                        </View>                        
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
        paddingBottom: 100

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

    iconstyle: {
        justifyContent: 'flex-end'
    }
});
