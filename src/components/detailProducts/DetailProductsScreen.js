import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { Card, Title, Paragraph } from 'react-native-paper';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default class DetailProductScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        const item = navigation.getParam('item');

        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.title}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name="md-arrow-back" size={25} color="#B10D65" />
                        </TouchableOpacity>
                        <View style={{ width: 30 }} />
                        <TouchableOpacity>
                            <Ionicons name="ios-cart" size={25} color="#B10D65" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.swiper}>
                        <Swiper style={styles.imgContainer}>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={styles.img1}
                                    source={item.img[1]}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={styles.img1}
                                    source={item.img[2]}
                                    resizeMode='contain'
                                />
                            </View>
                        </Swiper>
                    </View>
                </View >
                <View style={styles.infoContainer}>
                    <View style={styles.titleProduct}>
                        <Text style={{ color: '#BCBCBC', fontSize: 25 }}>{item.name}</Text>
                        <Text style={{ fontSize: 25 }}> / </Text>
                        <Text style={{ color: '#B10D65', fontSize: 25 }}>{item.cost} VND</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={{ color: '#489620', fontSize: 30 }}>
                            Detail of this product
                        </Text>
                    </View>
                    <Card>
                        <Card.Content>
                            <Paragraph style={{ fontSize: 18, paddingLeft: 40, }}>
                                {item.detail}
                            </Paragraph>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        );
    }
}

//1280 720
const imgHeight = width * 0.8;
const imgWidth = imgHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 5
    },
    top: {
        flex: 2,
        backgroundColor: '#fff',
        padding: 15,
        borderTopColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#D6D6D6',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        elevation: 5
    },
    title: {
        flex: 1 / 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    swiper: {
        flex: 5,
    },
    img1: {
        width: imgWidth,
        height: imgHeight,
    },
    imgContainer: {
        margin: 10,
        paddingLeft: width / 3.5,
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        backgroundColor: '#fff',
        elevation: 5
    },
    titleProduct: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    detail: {
        padding: 10
    }
});
