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
import { GET_ACCOUNT_INFO_URL, UPDATE_USERINFO_URL } from '../../backend/url';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class UserInfoScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            isEditButtonPressed: false,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
        };
    }

    componentDidMount() {
        this.getUserInfoFromServer();
    }

    async getUserInfoFromServer() {
        const url = GET_ACCOUNT_INFO_URL(this.props.username);
        const response = await fetch(url, { method: 'GET', body: null });
        const bundle = await response.json();
        this.updateView(bundle);
    }

    async updateUserInfo() {
        const dataObj = {
            user_name: this.props.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
        };
        const response = await fetch(UPDATE_USERINFO_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });
        const loginState = await response.json();

        if (loginState === 'OK') {
            ToastAndroid.show('Your information updated successfully', ToastAndroid.LONG);
            this.getUserInfoFromServer();
        } else {
            ToastAndroid.show('Information update failed', ToastAndroid.LONG);
        }
    }

    updateView(bundle) {
        this.setState({
            firstName: bundle.firstname,
            lastName: bundle.lastname,
            email: bundle.email,
            phone: bundle.phone,
            address: bundle.address
        });
    }


    handleEditButtonOnPress() {
        if (this.state.isEditButtonPressed) {
            this.handleSaveButtonOnPress();
        } else {
            this.setState({ isEditButtonPressed: true });
        }
    }

    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validatePhoneNumber = (phoneNumber) => {
        const phoneNumberRegex = /^[0-9]{9,10}$/;
        return phoneNumberRegex.test(phoneNumber);
    }

    validateTextInput = () => {
        if (!this.validateEmail(this.state.email)) {
            return 'This Email is not valid';
        }
        if (!this.validatePhoneNumber(this.state.phone)) {
            return 'This Phone number is not valid';
        }
        return true;
    }

    handleSaveButtonOnPress() {
        const validateState = this.validateTextInput();
        if (validateState === true) {
            this.updateUserInfo();
        } else {
            ToastAndroid.show(validateState, ToastAndroid.LONG);
        }
        this.setState({ isEditButtonPressed: false });
    }

    handleChangePasswordButtonOnPress() {
        if (this.state.isEditButtonPressed === false) {
            this.props.navigation.navigate('ChangePassword');
        } else {
            this.handleCancelButtonOnPress();
        }
    }

    handleCancelButtonOnPress() {
        this.loadTempInfo();
        this.setState({ isEditButtonPressed: false });
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
                        Information
                    </Text>
                    <TouchableOpacity style={{ marginTop: 5 }}>
                        <Ionicons name="ios-happy" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style={styles.txtrow}
                        editable={this.state.isEditButtonPressed}
                        value={this.state.firstName}
                        placeholder="FIRST NAME"
                        onChangeText={firstName =>
                            this.setState({ firstName })
                        }
                    />
                    <TextInput
                        style={styles.txtrow}
                        editable={this.state.isEditButtonPressed}
                        value={this.state.lastName}
                        placeholder="LAST NAME"
                        onChangeText={lastName => {
                            this.setState({ lastName });
                        }}
                    />
                    <TextInput
                        style={styles.txtrow}
                        editable={this.state.isEditButtonPressed}
                        value={this.state.email}
                        autoCapitalize='none'
                        placeholder="EMAIL"
                        onChangeText={email => {
                            this.setState({ email });
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
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity
                        style={styles.btnedit}
                        onPress={() => this.handleEditButtonOnPress()}
                    >
                        <Text style={styles.txtButton}>{this.state.isEditButtonPressed ? 'Save' : 'Edit Infomation'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnchange}
                        onPress={() => this.handleChangePasswordButtonOnPress()}
                    >
                        <Text style={styles.txtButton}>{this.state.isEditButtonPressed ? 'Cancel' : 'Change Password'}</Text>
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

export default connect(mapStateToProps, null)(UserInfoScreen);
