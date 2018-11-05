import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput,
} from 'react-native';
import LoginScreen from '../menu/LoginScreen';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginScreen: true,
        };
    }

    renderLoginScreen() {
        if (this.state.showLoginScreen === true) {
            return (
                <LoginScreen />
            );
        }
        return (null);
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.avatarView}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={require('../../drawable/userDefaultAvater.png')}
                    />
                    <TouchableOpacity onPress={() => this.setState({ showLoginScreen: !this.state.showLoginScreen })}>
                        <Text style={{ marginTop: 20 }}>Have a nice day!</Text>
                    </TouchableOpacity>
                </View>
                {this.renderLoginScreen()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        borderRightWidth: 3,
        borderRightColor: '#268bff',
        backgroundColor: '#c5a4f2'
    },
    avatarView: {
        height: (height / 2),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    controller: {
        height: (height / 2),
        alignItems: 'center',
    },
    textInput: {
        height: height / 10,
        backgroundColor: '#fff',
        paddingLeft: 20,
        width: (width / 35) * 22,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#268bff',
        fontSize: 15,
        elevation: 5,
    },
    loginButton: {
        height: height / 10,
        backgroundColor: '#268bff',
        marginLeft: 110,
        width: (width / 35) * 11,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#268bff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    }
});
