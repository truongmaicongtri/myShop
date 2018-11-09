import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput,
    Alert, TouchableWithoutFeedback
} from 'react-native';
import Modal from 'react-native-modal';
import { ImagePicker, Permissions } from 'expo';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenTaget: 'Login',
            avatarSource: null,
            yesNoDialogVisible: false,
            uploadImageDialogVisible: false
        };
    }
    onLogoutPress() {
        this.setState({ yesNoDialogVisible: true });
    }

    setScreenTaget(state) {
        this.setState({ screenTaget: state });
    }

    pickImageFromLibrary = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        let result = await ImagePicker.launchImageLibraryAsync({
            // allowsEditing: true,
            // aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.setState({ avatarSource: result.uri });
        }
    };
    pickImageFromCamera = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        let result = await ImagePicker.launchCameraAsync({
            // allowsEditing: true,
            // aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.setState({ avatarSource: result.uri });
        }
    };

    render() {
        switch (this.state.screenTaget) {
            case 'Login':
                return (
                    <View style={styles.screen}>
                        <View style={styles.avatarView}>
                            <Image
                                style={styles.avatarImage}
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
                                style={styles.avatarImage}
                                source={this.state.avatarSource != null ? { uri: this.state.avatarSource } : require('../../drawable/userDefaultAvater.png')}
                            />
                            <TouchableOpacity onPress={() => this.setState({ uploadImageDialogVisible: true })}>
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
                            <TouchableOpacity
                                style={styles.btnStyle}
                                onPress={() => this.props.navigation.navigate('CheckOutHistory')}
                            >
                                <Text style={styles.txtButton}>Your checkout history</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btnStyle}
                                onPress={() => this.props.navigation.navigate('RatingHistory')}
                            >
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
                        {/* YesNo Dialog */}
                        <Modal
                            style={styles.modal}
                            isVisible={this.state.yesNoDialogVisible}
                            backdropOpacity={0.2}
                            onSwipe={() => this.setState({ yesNoModalVisible: false })}
                            swipeDirection="left"
                        >
                            <View>
                                <View style={styles.modalAlert}>
                                    <Text>Are you sure?</Text>
                                </View>
                                <View style={styles.modalOption}>
                                    <TouchableWithoutFeedback
                                        onPress={() => {
                                            this.setState({ yesNoModalVisible: false });
                                            this.setScreenTaget('Login');
                                        }}
                                    >
                                        <View style={styles.modalYes}>
                                            <Text>Yes</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => this.setState({ yesNoModalVisible: false })} >
                                        <View style={styles.modalNo}>
                                            <Text>No</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </Modal>
                        {/* Choose way to upload image Dialog */}
                        <Modal
                            style={styles.modal}
                            isVisible={this.state.uploadImageDialogVisible}
                            cancelled
                            backdropOpacity={0.2}
                            onSwipe={() => this.setState({ uploadImageDialogVisible: false })}
                            swipeDirection="left"
                        >
                            <View>
                                <View style={styles.modalAlert}>
                                    <Text>Upload avatar from:</Text>
                                </View>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.pickImageFromCamera();
                                        this.setState({ uploadImageDialogVisible: false });
                                    }}
                                >
                                    <View style={styles.modalOptionCamera}>
                                        <Text>Camera</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.pickImageFromLibrary();
                                        this.setState({ uploadImageDialogVisible: false });
                                    }}
                                >
                                    <View style={styles.modalOptionCamera}>
                                        <Text>Library</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.setState({ uploadImageDialogVisible: false });
                                    }}
                                >
                                    <View style={styles.modalOptionLibrary}>
                                        <Text>Cancel</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </Modal>
                    </View >
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
        backgroundColor: '#c5a4f2',
        padding: width / 20,
    },
    avatarView: {
        height: (height / 3),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    avatarImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#268bff'
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
        marginTop: 30,
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
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height
    },
    modalAlert: {
        width: width * 0.6,
        height: height / 12,
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 1,
        borderRightWidth: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOption: {
        width: width * 0.6,
        height: height / 12,
        flexDirection: 'row',
    },
    modalYes: {
        width: width * 0.3,
        height: height / 12,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 1,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalNo: {
        width: width * 0.3,
        height: height / 12,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderBottomRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOptionCamera: {
        width: width * 0.6,
        height: height / 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderLeftWidth: 2,
        borderBottomWidth: 1,
        borderRightWidth: 2,
    },
    modalOptionLibrary: {
        width: width * 0.6,
        height: height / 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    }
});

export default LoginScreen;
