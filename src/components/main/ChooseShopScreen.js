import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity,
    Dimensions, TextInput, ToastAndroid
} from 'react-native';
import { LinearGradient, BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { GET_SHOP_NAME_URL } from '../../backend/url';


class ChooseShopScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopId: '',
            hasCameraPermission: null,
            isScanning: false
        };
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    async callApi(shopId) {
        const url = GET_SHOP_NAME_URL(shopId);
        const response = await fetch(url, { method: 'POST', body: null });

        const json = await response.json();
        this.checkShop(json, shopId);
    }

    checkShop(json, shopId) {
        if (json != null) {
            this.props.changeShop(shopId);
        } else {
            ToastAndroid.show('Không tìm thấy shop', ToastAndroid.SHORT);
        }
    }

    handleScanButtonPress() {
        this.setState({ isScanning: true });
    }


    handleEnterButtonPress() {
        this.callApi(this.state.shopId);
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ isScanning: false, shopId: data });
        this.callApi(data);
    }

    render() {
        const { hasCameraPermission, isScanning } = this.state;

        if (isScanning) {
            return (
                <View style={{ flex: 1 }}>
                    <BarCodeScanner
                        onBarCodeScanned={this.handleBarCodeScanned}
                        style={StyleSheet.absoluteFill}
                    />
                </View>
            );
        }

        // if (hasCameraPermission === null) {
        //     return <Text>Requesting for camera permission</Text>;
        // }
        // if (hasCameraPermission === false) {
        //     return <Text>No access to camera</Text>;
        // }

        return (
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#2980B9', '#6DD5FA']}
                style={styles.screen}
            >

                <Text style={styles.textStyle}>Scan shop's QR code:</Text>
                {
                    this.state.isScanning ?
                        <View style={{ flex: 1 }}>
                            <BarCodeScanner
                                onBarCodeScanned={this.handleBarCodeScanned}
                                style={StyleSheet.absoluteFill}
                            />
                        </View>
                        :
                        <View style={{ marginTop: 10, alignItems: 'center', width: width * 0.9, height: width / 4 }}>
                            {
                                this.state.hasCameraPermission ?
                                    <LinearGradient colors={['#6b6b83', '#6b6b83']} style={styles.scanButton} >
                                        <TouchableOpacity
                                            onPress={() => this.handleScanButtonPress()}
                                            style={styles.touchableStyle}
                                        >
                                            <Text style={{ color: 'white' }}>Start Scan</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                    :
                                    this.state.hasCameraPermission === null ?
                                        <Text>Requesting for camera permission</Text>
                                        :
                                        <Text>No access to camera</Text>
                            }

                        </View>
                }
                <Text style={styles.textStyle}>Or enter shop ID: </Text>
                <View style={{ marginTop: 10, alignItems: 'flex-start', flexDirection: 'row' }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="SHOP ID"
                        autoCapitalize='none'
                        underlineColorAndroid='transparent'
                        onChangeText={shopId => this.setState({ shopId })}
                    />

                    <LinearGradient colors={['#aa4b6b', '#aa4b6b']} style={styles.loginButton} >
                        <TouchableOpacity
                            onPress={() => this.handleEnterButtonPress()}
                            style={styles.touchableStyle}
                        >
                            <Text style={{ color: 'white' }}>ENTER</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient >
        );


        // return (
        //     <LinearGradient
        //         start={{ x: 0, y: 0 }}
        //         end={{ x: 1, y: 0 }}
        //         colors={['#2980B9', '#6DD5FA']}
        //         style={styles.screen}
        //     >
        //         <TextInput
        //             style={styles.textInput}
        //             placeholder="SHOP ID"
        //             autoCapitalize='none'
        //             underlineColorAndroid='transparent'
        //             onChangeText={shopId => this.setState({ shopId })}
        //         />
        //         <View style={{ marginTop: 10, alignItems: 'center' }}>
        //             <LinearGradient colors={['#4a9cf9', '#268bff']} style={styles.loginButton} >
        //                 <TouchableOpacity
        //                     onPress={() => this.handleEnterButtonPress()}
        //                     style={styles.touchableStyle}
        //                 >
        //                     <Text style={{ color: 'white' }}>ENTER</Text>
        //                 </TouchableOpacity>
        //             </LinearGradient>
        //         </View>
        //     </LinearGradient >
        // );
    }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#82bbfc',
        padding: width / 20,
        justifyContent: 'center',

        paddingBottom: 200,
    },
    textInput: {
        width: width * 0.6,
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
        width: width * 0.3,
        borderRadius: height / 13,
        borderWidth: 1,
        borderColor: '#268bff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    scanButton: {
        height: height / 13,
        // backgroundColor: '#268bff',
        width: width * 0.9,
        borderRadius: height / 13,
        borderWidth: 1,
        borderColor: '#268bff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    textStyle: {
        fontSize: 15,
        color: 'black'
    }
});

export default connect(null, actions)(ChooseShopScreen);
