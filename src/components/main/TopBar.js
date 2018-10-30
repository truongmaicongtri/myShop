import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.shopname}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Ionicons name="ios-menu" size={40} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>
                        My Shop
                    </Text>
                    <TouchableOpacity style={{ marginTop: 5 }}>
                        <Ionicons name="ios-happy" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={{
                        height: height / 25,
                        backgroundColor: '#fff',
                        paddingLeft: 10,
                        elevation: 5,
                    }}
                    placeholder="Product 's name"
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        //#1b6ff7',
        paddingTop: 20,
        backgroundColor: '#3c95fc',
        height: height / 7,
        justifyContent: 'space-around',
        padding: 15,
        elevation: 5,
    },

    shopname: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10
    }
});

export default TopBar;
