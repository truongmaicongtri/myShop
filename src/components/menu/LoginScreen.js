import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput,
    ToastAndroid
} from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { LOGIN_URL } from '../../backend/url';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    async handleLogInButtonPress() {
        const dataObj = {
            user_name: this.state.username,
            userpassword: this.state.password
        };
        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });
        const loginState = await response.json();

        ToastAndroid.show(JSON.stringify(loginState), ToastAndroid.SHORT);
        if (loginState === 'Login successful!') {
            this.props.logIn(dataObj.user_name);
        }
    }


    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#2980B9', '#6DD5FA']}
                style={styles.screen}
            >
                <View style={styles.topContainer}>
                    <Image
                        style={styles.avatarView}
                        source={require('../../drawable/icon/userDefaultAvater.png')}
                    />
                    <Text style={{ marginTop: 20 }}>Have a nice day!</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="USER"
                        autoCapitalize='none'
                        underlineColorAndroid='transparent'
                        onChangeText={username => this.setState({ username })}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="PASSWORD"
                        autoCapitalize='none'
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.loginButton} >
                        <TouchableOpacity
                            onPress={() => this.handleLogInButtonPress()}
                            style={styles.touchableStyle}
                        >
                            <Text style={{ color: 'white' }}>LOG IN</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient >
        );
    }
}
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#82bbfc',
        padding: width / 20,
    },
    topContainer: {
        height: (height / 3),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    avatarView: {
        width: 150,
        height: 150,
    },
    textInput: {
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
    touchableStyle: {
        height: height / 13,
        width: width / 3,
        borderRadius: height / 13,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default connect(null, actions)(LoginScreen);
