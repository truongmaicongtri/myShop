import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity,
    Dimensions, TextInput,
    ToastAndroid
} from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { LOGIN_URL, CHANGE_PASSWORD_URL } from '../../backend/url';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class ChangePasswordScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        };
    }

    handleSave() {
        const { oldPassword, newPassword, confirmPassword } = this.state;
        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            ToastAndroid.show('Vui lòng nhập đầy đủ thông tin', ToastAndroid.SHORT);
        } else if (newPassword !== confirmPassword) {
            ToastAndroid.show('Mật khẩu xác thực chưa đúng', ToastAndroid.SHORT);
        } else {
            this.checkOldPassword();
        }
    }

    async checkOldPassword() {
        const dataObj = {
            user_name: this.props.username,
            userpassword: this.state.oldPassword
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

        if (loginState === 'Login successful!') {
            this.changePassword();
        } else {
            ToastAndroid.show('Mật khẩu cũ chưa đúng', ToastAndroid.SHORT);
        }
    }

    async changePassword() {
        const dataObj = {
            user_name: this.props.username,
            newpassword: this.state.newPassword
        };
        const response = await fetch(CHANGE_PASSWORD_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });
        const loginState = await response.json();

        if (loginState === 'OK') {
            ToastAndroid.show('Đổi mật khẩu thành công', ToastAndroid.LONG);
            this.props.navigation.goBack();
        }
    }

    handleCancel() {
        this.setState({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        });
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
                        Password
                    </Text>
                    <TouchableOpacity style={{ marginTop: 5 }}>
                        <Ionicons name="ios-happy" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style={styles.txtrow}
                        autoCapitalize='none'
                        secureTextEntry
                        value={this.state.oldPassword}
                        placeholder="OLD PASSWORD"
                        onChangeText={(text) => this.setState({ oldPassword: text })}
                    />
                    <TextInput
                        style={styles.txtrow}
                        autoCapitalize='none'
                        secureTextEntry
                        value={this.state.newPassword}
                        placeholder="NEW PASSWORD"
                        onChangeText={(text) => this.setState({ newPassword: text })}
                    />
                    <TextInput
                        style={styles.txtrow}
                        autoCapitalize='none'
                        secureTextEntry
                        value={this.state.confirmPassword}
                        placeholder="CONFIRM PASSWORD"
                        onChangeText={(text) => this.setState({ confirmPassword: text })}
                    />
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity
                        style={styles.btnedit}
                        onPress={() => this.handleSave()}
                    >
                        <Text style={styles.txtButton}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnchange}
                        onPress={() => this.handleCancel()}
                    >
                        <Text style={styles.txtButton}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}
const drawerWidth = width * 0.85;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4d6fd',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 60,
    },
    shopname: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 60
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

    btn: {
        marginTop: 20,
        flexDirection: 'row'
    },

    btnedit: {
        backgroundColor: '#268bff',
        width: (drawerWidth - 47.5) / 2,
        height: height / 13,
        padding: 20,
        borderTopLeftRadius: height / 13,
        borderBottomLeftRadius: height / 13,
        justifyContent: 'center',
        elevation: 5,
    },

    btnchange: {
        backgroundColor: '#268bff',
        width: (drawerWidth - 47.5) / 2,
        height: height / 13,
        padding: 20,
        borderTopRightRadius: height / 13,
        borderBottomRightRadius: height / 13,
        justifyContent: 'center',
        elevation: 5,
        marginLeft: 5,
    },

    txtButton: {
        textAlign: 'center',
        color: '#fff'
    }
});

const mapStateToProps = state => ({
    username: state.login.username
});

export default connect(mapStateToProps, null)(ChangePasswordScreen);
