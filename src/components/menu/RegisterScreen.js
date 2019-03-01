import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Keyboard,
    Dimensions, TextInput,
    ToastAndroid, TouchableWithoutFeedback,
    findNodeHandle
} from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as actions from '../../actions';
import { REGISTER_URL } from '../../backend/url';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class RegisterScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            phone: '',
            address: '',
        };
    }

    loginAfterSignUpSuccessfully() {
        this.props.logIn(this.state.userName);
        setTimeout(() => this.props.navigation.goBack(), 2000);
    }

    handleSignUpState(state) {
        if (state === 'Duplicate') {
            ToastAndroid.show('Sorry, that username already exists!', ToastAndroid.SHORT);
        } else if (state === 'OK') {
            ToastAndroid.show('Registration completed successfully!', ToastAndroid.SHORT);
            this.loginAfterSignUpSuccessfully();
        }
    }

    async callApi(userName, password, phone, address) {
        const dataObj = {
            userName,
            password,
            phone,
            address
        };

        const response = await fetch(REGISTER_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });
        const loginState = await response.json();
        this.handleSignUpState(loginState);
    }

    validateUsername = (userName) => {
        const userNameRegex = /^[a-zA-Z0-9]{6,}$/;
        return userNameRegex.test(userName);
    }

    validatePassword = (password) => {
        const mediumPasswordRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
        return mediumPasswordRegex.test(password);
    }

    validatePhoneNumber = (phoneNumber) => {
        const phoneNumberRegex = /^0[0-9]{8,9}$/;
        return phoneNumberRegex.test(phoneNumber);
    }

    validateAddress = (address) => {
        const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
        return addressRegex.test(address);
    }

    validateTextInput = (userName, password, confirmPassword, phone, address) => {
        if (password !== confirmPassword) {
            return 'The password and confirmation password do not match.';
        } else if (!this.validateUsername(userName)) {
            return 'This username is not valid';
        } else if (!this.validatePassword(password)) {
            return 'This password is not valid';
        } else if (!this.validatePhoneNumber(phone)) {
            return 'This phone number is not valid';
        } else if (!this.validateAddress(address)) {
            return 'This address is not valid';
        }
        return true;
    }

    handleSignUpButtonPress() {
        const { userName, password, confirmPassword, phone, address } = this.state;
        const validateState = this.validateTextInput(userName, password, confirmPassword, phone, address);
        if (validateState === true) {
            this.callApi(userName, password, phone, address);
        } else {
            ToastAndroid.show(validateState, ToastAndroid.SHORT);
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <DismissKeyboard>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#72b2f9', '#eaafc8']} style={styles.container}>
                    <View style={styles.shopname}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="md-arrow-round-back" size={40} color="#fff" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>
                            REGISTER
                    </Text>
                        <TouchableOpacity style={{ marginTop: 5 }}>
                            <Ionicons name="ios-happy" size={35} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <KeyboardAwareScrollView>
                        <View>
                            <TextInput
                                style={styles.txtrow}
                                value={this.state.userName}
                                autoCapitalize='none'
                                placeholder="USER NAME"
                                onChangeText={userName =>
                                    this.setState({ userName })
                                }
                            />
                            <TextInput
                                style={styles.txtrow}
                                autoCapitalize='none'
                                secureTextEntry
                                value={this.state.password}
                                placeholder="PASSWORD"
                                onChangeText={password => {
                                    this.setState({ password });
                                }}
                            />
                            <TextInput
                                style={styles.txtrow}
                                value={this.state.confirmPassword}
                                autoCapitalize='none'
                                secureTextEntry
                                placeholder="CONFIRM PASSWORD"
                                onChangeText={confirmPassword => {
                                    this.setState({ confirmPassword });
                                }}
                            />
                            <TextInput
                                style={styles.txtrow}
                                value={this.state.phone}
                                autoCapitalize='none'
                                keyboardType='numeric'
                                placeholder="PHONE NUMBER"
                                onChangeText={phone => {
                                    this.setState({ phone });
                                }}
                            />
                            <TextInput
                                style={styles.txtrow}
                                value={this.state.address}
                                placeholder="ADDRESS"
                                onChangeText={address => {
                                    this.setState({ address });
                                }}
                            />
                            <View style={{ marginTop: 10, marginBottom: 20, alignItems: 'center' }}>
                                <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.submitButton} >
                                    <TouchableOpacity
                                        onPress={() => this.handleSignUpButtonPress()}
                                        style={styles.touchableStyle}
                                    >
                                        <Text style={{ color: 'white' }}>SIGN UP</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </LinearGradient>
            </DismissKeyboard>
        );
    }
}

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4d6fd',
        padding: 20,
        paddingTop: 60,
    },
    shopname: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 30,
    },
    txtrow: {
        backgroundColor: '#fff',
        marginTop: 15,
        height: height / 13,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderColor: '#268bff',
        borderRadius: height / 13,
        elevation: 5,
    },

    txtButton: {
        textAlign: 'center',
        color: '#fff'
    },

    submitButton: {
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

export default connect(null, actions)(RegisterScreen);
