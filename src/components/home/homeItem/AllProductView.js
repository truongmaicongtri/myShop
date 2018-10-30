import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Img1 from '../../../drawable/2.jpg';
import Img2 from '../../../drawable/3.jpg';
import Img3 from '../../../drawable/4.jpg';
import Img4 from '../../../drawable/5.jpg';


const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class AllProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <View style={styles.collect}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AllProduct')}
                        delayPressIn={100}
                    >
                        <Text style={styles.textStyle}>ALL ITEMS</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 4, elevation: 5, }}>
                    <Swiper>
                        <Image source={Img1} style={styles.imageStyle1} />
                        <Image source={Img2} style={styles.imageStyle2} />
                        <Image source={Img3} style={styles.imageStyle3} />
                        <Image source={Img4} style={styles.imageStyle4} />
                    </Swiper>
                </View>
            </View>
        );
    }
}
//1024 * 563
//980 * 487
//1893 * 1083
//1280 * 720
const imgWidth = width - 40;
const imgHeight = (imgWidth / 1024) * 550;
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

    imageStyle1: {
        width: imgWidth,
        height: imgHeight
    },

    imageStyle2: {
        width: width - 40,
        height: ((width - 40) / 980) * 500
    },

    imageStyle3: {
        width: width - 40,
        height: ((width - 40) / 1893) * 1083
    },

    imageStyle4: {
        width: width - 40,
        height: ((width - 40) / 1280) * 630
    }
});

export default AllProductView;
