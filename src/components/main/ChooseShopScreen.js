import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, ListView,
    Dimensions, TextInput, ToastAndroid
} from 'react-native';
import { SearchBar } from 'react-native-elements';
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
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
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


    handleEnterButtonPress(shopId) {
        this.callApi(shopId);
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ isScanning: false, shopId: data });
        this.callApi(data);
    }

    async searchShopName() {
        const url = SEARCH_BY_SHOP_NAME(this.state.shopName);
        const response = await fetch(url, { method: 'POST', body: null });

        const json = await response.json();

        this.updateListView(json);
    }

    updateListView(json) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(json)
        });
    }

    async updateSearch(text) {
        await this.setState({
            shopName: text
        });
        this.searchShopName();
    }

    renderRow(data) {
        return (
            <TouchableOpacity onPress={() => this.handleEnterButtonPress(data.shopId)}>
                <View style={styles.rowStyle}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#b8c6c6' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>{data.shopName}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>icon Here!!!!</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { isScanning } = this.state;

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
                colors={['#ffffff', '#ffffff']}
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
                <View style={{ height: 10 }} />
                <SearchBar
                    placeholder="SHOP ID"
                    autoCapitalize='none'
                    lightTheme
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.updateSearch(text)}
                    value={this.state.shopName}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections
                />
            </LinearGradient >
        );
    }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#82bbfc',
        padding: width / 20,
        justifyContent: 'center',
        paddingTop: 100,
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
        borderWidth: 1,
        borderColor: '#268bff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    textStyle: {
        fontSize: 15,
        color: 'black'
    },
    rowStyle: {
        flex: 1,
        backgroundColor: '#dee2e8',
        height: height / 13,
        padding: 5
    }
});

export default connect(null, actions)(ChooseShopScreen);
