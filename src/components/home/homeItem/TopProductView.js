import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Img1 from '../../../drawable/8.jpg';
import Img2 from '../../../drawable/9.jpg';
import Img3 from '../../../drawable/10.jpg';
import Img4 from '../../../drawable/11.jpg';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titlecontainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('TopProduct')}
                        activeOpacity={this.state.scrollBegin ? 1.0 : 0}
                        delayPressIn={100}
                    >
                        <Text style={styles.title}> TOP PRODUCT </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity
                        style={styles.productContainer}
                        delayPressIn={100}
                    >
                        <Image source={Img1} style={styles.imgStyle} />
                        <Text style={styles.productname}>Product name</Text>
                        <Text style={styles.productprice}>1.000.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.productContainer}
                        delayPressIn={100}
                    >
                        <Image source={Img2} style={styles.imgStyle} />
                        <Text style={styles.productname}>Product name</Text>
                        <Text style={styles.productprice}>999.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.productContainer}
                        delayPressIn={100}
                    >
                        <Image source={Img3} style={styles.imgStyle} />
                        <Text style={styles.productname}>Product name</Text>
                        <Text style={styles.productprice}>1.500.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.productContainer}
                        delayPressIn={100}
                    >
                        <Image source={Img4} style={styles.imgStyle} />
                        <Text style={styles.productname}>Product name</Text>
                        <Text style={styles.productprice}>600.000 VND</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
//783 * 1200
const productwidth = (width - 60) / 2;
const productimgheight = (productwidth / 783) * 1200;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        elevation: 5,
    },

    titlecontainer: {
        justifyContent: 'center',
        height: 50,
        paddingLeft: 10,
        marginBottom: 20
    },

    title: {
        color: '#AFAEAF',
        fontSize: 25
    },

    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },

    productContainer: {
        width: productwidth,
        marginBottom: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2
    },

    imgStyle: {
        width: productwidth,
        height: productimgheight
    },

    productname: {
        marginTop: 10,
        paddingLeft: 10,
        fontWeight: '500',
        color: '#D3D3CF',
        marginBottom: 10
    },

    productprice: {
        paddingLeft: 10,
        color: '#662F90'
    }
});

export default TopProduct;
