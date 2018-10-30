import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { Card, Title, Paragraph } from 'react-native-paper';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default class ContactScreen extends Component {
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
                <View style={styles.img}>
                    <View style={styles.title}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name="md-arrow-back" size={35} color="#B10D65" />
                        </TouchableOpacity>
                        <View style={{ width: 30 }} />
                        <TouchableOpacity>
                            <Ionicons name="ios-cart" size={35} color="#B10D65" />
                        </TouchableOpacity>
                    </View>
                    <Swiper style={styles.imgContainer}>
                        <Image source={item.img[0]} style={styles.img1} />
                        <Image source={item.img[1]} style={styles.img1} />
                        <Image source={item.img[2]} style={styles.img1} />
                    </Swiper>
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
const imgWidth = width - 30;
const imgHeight = (imgWidth / 1280) * 720;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    img: {
        height: height / 2.5,
        backgroundColor: '#fff',
        padding: 15,
        borderTopColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#D6D6D6',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
    },
    img1: {
        width: imgWidth,
        height: imgHeight
    },
    imgContainer: {
        margin: 10
    },
    infoContainer: {
        height: height / 2,
        backgroundColor: '#fff',
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
