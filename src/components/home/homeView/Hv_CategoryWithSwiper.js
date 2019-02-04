import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, Dimensions,
    Image, TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import Swiper from 'react-native-swiper';


const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class HvCategoryWithSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { navigation } = this.props;
        const { category } = this.props;
        return (
            <View style={styles.collect}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Category', { category })}
                        delayPressIn={100}
                    >
                        <Text style={styles.textStyle}>{category.categoryname}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 4, elevation: 5, }}>
                    <Swiper>
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate('Category', { category })}
                        >
                            <Image source={{ uri: category.categoryview[0] }} style={styles.imageStyle1} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate('Category', { category })}
                        >
                            <Image source={{ uri: category.categoryview[1] }} style={styles.imageStyle2} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate('Category', { category })}
                        >
                            <Image source={{ uri: category.categoryview[2] }} style={styles.imageStyle3} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate('Category', { category })}
                        >
                            <Image source={{ uri: category.categoryview[3] }} style={styles.imageStyle4} />
                        </TouchableWithoutFeedback>
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

export default HvCategoryWithSwiper;
