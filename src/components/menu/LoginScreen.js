import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput,
} from 'react-native';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.controller}>
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
        <View style={{ marginTop: 10 }}>
            <TouchableOpacity>
                <View style={styles.loginButton}>
                    <Text style={{ color: 'white' }}>LOG IN</Text>
                </View>
            </TouchableOpacity>
        </View>
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
