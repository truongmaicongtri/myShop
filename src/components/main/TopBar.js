import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';


class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopname: ''
        };
    }

    async componentDidMount() {
        const url = 'http://192.168.1.19/my_shop_webservice/getShopname.php?shopid=shop01';
        const response = await fetch(url, { method: 'POST', body: null });
        const json = await response.text();
        this.setState({
            shopname: json
        });
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4a9cf9', '#eaafc8']} style={styles.container}>
                <View style={styles.shopname}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Ionicons name="ios-menu" size={40} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>
                        {this.state.shopname}
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
            </LinearGradient>
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
