import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput
} from 'react-native';
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
            <View style={styles.screen}>
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
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => this.handleLogIn()}
                    >
                        <View>
                            <Text style={{ color: 'white' }}>LOG IN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
        backgroundColor: '#268bff',
        width: width / 3,
        borderRadius: height / 13,
        borderWidth: 1,
        borderColor: '#268bff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default connect(null, actions)(LoginScreen);
