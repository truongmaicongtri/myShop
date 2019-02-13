import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity,
    Dimensions, TextInput, ToastAndroid
} from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { GET_SHOP_NAME_URL } from '../../backend/url';

class ChooseShopScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async callApi() {
        const url = GET_SHOP_NAME_URL(this.state.shopId);
        const response = await fetch(url, { method: 'POST', body: null });

        const json = await response.json();
        this.checkShop(json);
    }

    checkShop(json) {
        if (json != null) {
            this.props.changeShop(this.state.shopId);
        } else {
            ToastAndroid.show('Không tìm thấy shop', ToastAndroid.SHORT);
        }
    }


    handleEnterButtonPress() {
        this.callApi();
    }

    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#2980B9', '#6DD5FA']}
                style={styles.screen}
            >
                <TextInput
                    style={styles.textInput}
                    placeholder="SHOP ID"
                    autoCapitalize='none'
                    underlineColorAndroid='transparent'
                    onChangeText={shopId => this.setState({ shopId })}
                />
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.loginButton} >
                        <TouchableOpacity
                            onPress={() => this.handleEnterButtonPress()}
                            style={styles.touchableStyle}
                        >
                            <Text style={{ color: 'white' }}>ENTER</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient >
        );
    }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#82bbfc',
        padding: width / 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: width * 0.9,
        height: height / 13,
        backgroundColor: '#fff',
        paddingLeft: 20,
        borderRadius: height / 13,
        borderWidth: 1,
        borderColor: '#268bff',
        fontSize: 15,
        elevation: 5,
    },
    loginButton: {
        height: height / 13,
        // backgroundColor: '#268bff',
        width: width / 3,
        borderRadius: height / 13,
        borderWidth: 1,
        borderColor: '#268bff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default connect(null, actions)(ChooseShopScreen);
