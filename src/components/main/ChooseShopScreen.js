import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, ListView,
    Dimensions, ToastAndroid,
    Keyboard, TouchableWithoutFeedback,
    Animated
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient, BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { GET_SHOP_NAME_URL, SEARCH_BY_SHOP_NAME } from '../../backend/url';


class ChooseShopScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopId: '',
            shopName: '',
            hasCameraPermission: null,
            isScanning: false,
            isSearching: false,
            typingTimer: {},
            doneTypingInterval: 200,
            fadeAnim: new Animated.Value(0),
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        };
    }


    componentDidMount() {
        this.requireCameraPermission();
    }

    async requireCameraPermission() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    async callApiGetShopName(shopId) {
        const url = GET_SHOP_NAME_URL(shopId);
        const response = await fetch(url, { method: 'GET', body: null });

        const json = await response.json();
        this.checkShop(json, shopId);
    }

    checkShop(json, shopId) {
        if (json != null) {
            this.props.changeShop(shopId);
        } else {
            ToastAndroid.show('Shop could not be found', ToastAndroid.SHORT);
        }
    }

    handleScanButtonPress() {
        this.setState({ isScanning: true });
    }


    handleEnterButtonPress(shopId) {
        this.callApiGetShopName(shopId);
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ isScanning: false, shopId: data });
        this.callApiGetShopName(data);
    }

    async calApiSearchShopName() {
        const url = SEARCH_BY_SHOP_NAME(this.state.shopName);
        const response = await fetch(url, { method: 'GET', body: null });

        const json = await response.json();
        this.updateListView(json);
    }

    updateListView(json) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(json)
        });
    }

    searchShopName() {
        if (this.state.shopName.trim() !== '') {
            this.calApiSearchShopName();
        } else {
            this.updateListView([]);
        }
    }

    async handleSearchBarChangeText(text) {
        clearTimeout(this.state.typingTimer);
        await this.setState({
            shopName: text
        });
        await this.setState({
            typingTimer: setTimeout(() => this.searchShopName(), this.state.doneTypingInterval)
        });
    }

    renderRow(data) {
        return (
            <TouchableOpacity onPress={() => this.handleEnterButtonPress(data.shopId)}>
                <View style={styles.rowStyle}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#bdc6cf', borderRadius: 3 }}>
                        <View style={{ flex: 5, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>{data.shopName}</Text>
                        </View>
                        {
                            !this.state.isSearching &&
                                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                                    <MaterialIcons name='touch-app' size={25} color='#4e5766' />
                                </View>
                        }
                    </View>
                </View>
            </TouchableOpacity >
        );
    }

    render() {
        const { isScanning, isSearching } = this.state;

        return (
            <DismissKeyboard>
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#ffffff', '#ffffff']}
                    style={styles.screen}
                >
                    {
                        !isSearching ?
                            <View>
                                <Text style={styles.textStyle}>Scan shop's QR code:</Text>
                                {
                                    isScanning ?
                                        <View style={{ height: width * 0.9, borderColor: '#bdc6cf', borderWidth: 5 }}>
                                            <BarCodeScanner
                                                onBarCodeScanned={this.handleBarCodeScanned}
                                                style={StyleSheet.absoluteFill}
                                            />
                                        </View>
                                        :
                                        <View style={{ marginTop: 10, alignItems: 'center', width: width * 0.9, height: width / 4 }}>
                                            {
                                                this.state.hasCameraPermission ?
                                                    <LinearGradient colors={['#9badc9', '#9badc9']} style={styles.scanButton} >
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
                            </View>
                            :
                            <View />
                    }

                    <KeyboardAwareScrollView>
                        <View>
                            <Text style={styles.textStyle}>Or enter shop name: </Text>
                            <SearchBar
                                placeholder="SHOP NAME"
                                autoCapitalize='none'
                                showLoading={this.state.isSearching}
                                lightTheme
                                round
                                onChangeText={(text) => this.handleSearchBarChangeText(text)}
                                value={this.state.shopName}
                                onFocus={() => this.setState({ isSearching: true, isScanning: false })}
                                onSubmitEditing={() => this.setState({ isSearching: false })}
                                onEndEditing={() => this.setState({ isSearching: false })}
                            />
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow.bind(this)}
                                enableEmptySections
                            />
                        </View>
                    </KeyboardAwareScrollView>
                </LinearGradient >
            </DismissKeyboard>
        );
    }
}

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#82bbfc',
        padding: width / 20,
        justifyContent: 'space-around',
    },
    loginButton: {
        flex: 1,
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
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    textStyle: {
        fontSize: 15,
        color: 'black',
        marginBottom: 10,
        marginTop: 20
    },
    rowStyle: {
        flex: 1,
        backgroundColor: '#e1e8ee',
        height: height / 13,
        padding: 8,
        paddingTop: 0
    }
});

export default connect(null, actions)(ChooseShopScreen);
