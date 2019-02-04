import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class HvCategoryWithAnImage extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        const { navigation } = this.props;
        const { category } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Category', { category })
                        }
                        delayPressIn={100}
                    >
                        <Text style={styles.textStyle}>{category.categoryname}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 4 }}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Category', { category })
                        }
                        delayPressIn={100}
                    >
                        <Image source={{ uri: category.categoryview[0] }} style={styles.imageStyle} />
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}
//2400*1648
const imgWidth = width - 40;
const imgHeight = (imgWidth / 2400) * 1230;
const styles = StyleSheet.create({
    container: {
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

export default HvCategoryWithAnImage;
