import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput
} from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleLogIn() {
        this.props.logIn();
    }

    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2980B9', '#6DD5FA']} style={styles.screen}>
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
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="PASSWORD"
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.loginButton} >
                        <TouchableOpacity
                            onPress={() => this.handleLogIn()}
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
