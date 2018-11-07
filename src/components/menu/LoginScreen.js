import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput,
    Alert
} from 'react-native';
import Modal from 'react-native-modalbox';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenTaget: 'Login',
        };
    }
    onLogoutPress = () => {
        Alert.alert(
            'Alert',
            'Are you sure?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'OK', onPress: () => this.setScreenTaget('Login') },
            ],
        );
    }

    setScreenTaget(state) {
        this.setState({ screenTaget: state });
    }

    render() {
        switch (this.state.screenTaget) {
            case 'Login':
                return (
                    <View style={styles.screen}>
                        <View style={styles.avatarView}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={require('../../drawable/userDefaultAvater.png')}
                            />
                            <TouchableOpacity>
                                <Text style={{ marginTop: 20 }}>Have a nice day!</Text>
                            </TouchableOpacity>
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
                            <TouchableOpacity
                                style={styles.loginButton}
                                onPress={() => this.setScreenTaget('UserControlMenu')}
                            >
                                <View>
                                    <Text style={{ color: 'white' }}>LOG IN</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            case 'UserControlMenu':
                return (
                    <View style={styles.screen}>
                        <View style={styles.avatarView}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={require('../../drawable/userDefaultAvater.png')}
                            />
                            <TouchableOpacity >
                                <Text style={{ marginTop: 20 }}>Have a nice day!</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.btnStyle}
                                onPress={() => this.props.navigation.navigate('UserInfo')}
                            >
                                <Text style={styles.txtButton}>Your information</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.txtButton}>Your checkout history</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.txtButton}>Shop rating history</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.txtButton}>Share with friend!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.logoutButton}
                                onPress={() => this.onLogoutPress()}
                            >
                                <Text style={{ textAlign: 'center', color: 'black' }}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            default:
                break;
        }
        return (
            this.renderLoginScreen()
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        borderRightWidth: 3,
        borderRightColor: '#268bff',
        backgroundColor: '#c5a4f2',
        padding: width / 20,
    },
    avatarView: {
        height: (height / 3),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
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
        backgroundColor: '#268bff',
        width: width / 3,
        borderRadius: height / 13,
        borderWidth: 1,
        borderColor: '#268bff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    btnStyle: {
        marginTop: 20,
        backgroundColor: '#268bff',
        height: height / 13,
        padding: 10,
        borderRadius: height / 13,
        justifyContent: 'center',
        elevation: 5,
    },
    logoutButton: {
        marginTop: 60,
        backgroundColor: '#6caffc',
        height: height / 13,
        padding: 10,
        borderRadius: height / 13,
        justifyContent: 'center',
        elevation: 5,
    },
    txtButton: {
        textAlign: 'center',
        color: '#fff'
    }
});

export default LoginScreen;
