import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Img1 from '../../../drawable/1.jpg';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class Collection extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.collect}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Collection1')}
                        delayPressIn={100}
                    >
                        <Text style={styles.textStyle}>SPRING COLLECTION</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 4 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Collection1')}
                        delayPressIn={100}
                    >
                        <Image source={Img1} style={styles.imageStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
//2400*1648
const imgWidth = width - 40;
const imgHeight = (imgWidth / 2400) * 1200;
const styles = StyleSheet.create({
    collect: {
        height: height * 0.35,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 5,
    },

    textStyle: {
        fontSize: 25,
        color: '#AFAEAF'
    },

    imageStyle: {
        width: imgWidth,
        height: imgHeight
    }
});

export default Collection;
