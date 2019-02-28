import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity,
    Dimensions, TextInput,
    ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import * as actions from '../../actions';

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


    render() {
        const { navigation } = this.props;
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#72b2f9', '#eaafc8']} style={styles.container}>
                <View style={styles.shopname}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="md-arrow-round-back" size={40} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>
                        Sign Up
                    </Text>
                    <TouchableOpacity style={{ marginTop: 5 }}>
                        <Ionicons name="ios-happy" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style={styles.txtrow}
                        editable={this.state.isEditButtonPressed}
                        value={this.state.userName}
                        placeholder="USER NAME"
                        onChangeText={userName =>
                            this.setState({ userName })
                        }
                    />
                    <TextInput
                        style={styles.txtrow}
                        editable={this.state.isEditButtonPressed}
                        value={this.state.password}
                        placeholder="PASSWORD"
                        onChangeText={password => {
                            this.setState({ password });
                        }}
                    />
                    <TextInput
                        style={styles.txtrow}
                        editable={this.state.isEditButtonPressed}
                        value={this.state.confirmPassword}
                        autoCapitalize='none'
                        placeholder="CONFIRM PASSWORD"
                        onChangeText={confirmPassword => {
                            this.setState({ confirmPassword });
                        }}
                    />
                    <TextInput
                        style={styles.txtrow}
                        editable={this.state.isEditButtonPressed}
                        value={this.state.phone}
                        autoCapitalize='none'
                        placeholder="PHONE NUMBER"
                        onChangeText={phone => {
                            this.setState({ phone });
                        }}
                    />
                    <TextInput
                        style={styles.txtrow}
                        multiline
                        editable={this.state.isEditButtonPressed}
                        value={this.state.address}
                        placeholder="ADDRESS"
                        onChangeText={address => {
                            this.setState({ address });
                        }}
                    />
                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.submitButton} >
                            <TouchableOpacity
                                onPress={() => this.handleLogInButtonPress()}
                                style={styles.touchableStyle}
                            >
                                <Text style={{ color: 'white' }}>SIGN UP</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>

            </LinearGradient>
        );
    }
}

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
