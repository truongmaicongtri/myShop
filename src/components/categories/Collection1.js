import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Img1 from '../../drawable/13.jpg';
import Img2 from '../../drawable/14.jpg';
import Img3 from '../../drawable/15.jpg';

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
            <View style={styles.screen}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DetailProduct', { item: item1 })}
                >
                    <Text>Collection1 screen</Text>
                    <Text>Quay lại</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dbf0ff'
    }
});
