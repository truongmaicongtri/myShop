import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { GET_SHOP_NAME_URL } from '../../backend/url';


class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopname: ''
        };
    }

    componentDidMount() {
        this.callApi();
    }

    async callApi() {
        const url = GET_SHOP_NAME_URL(this.props.shopId);
        const response = await fetch(url, { method: 'GET', body: null });
        const json = await response.json();
        this.updateState(json);
    }

    updateState(name) {
        this.setState({
            shopname: name.replace('"', '') 
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

const mapStateToProps = state => ({
    shopId: state.shop.shopId
});

export default connect(mapStateToProps)(TopBar);
