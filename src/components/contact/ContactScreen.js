import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { GET_CONTACT_SCREEN_URL } from '../../backend/url';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            cellphone: '',
            email: '',
            phone: '',
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.002,
                longitudeDelta: 0.002,
            },
        };
    }

    componentWillMount() {
        this.callApi();
    }

    async callApi() {
        const url = GET_CONTACT_SCREEN_URL(this.props.shopId);
        const response = await fetch(url, { method: 'GET', body: null });
        const bundle = await response.json();
        this.updateState(bundle);
    }

    updateState(bundle) {
        const bundleLatitude = bundle.latitude;
        const bundleLongitude = bundle.longitude;

        this.setState({
            region: { ...this.state.region, latitude: bundleLatitude, longitude: bundleLongitude },
            address: bundle.address,
            cellphone: bundle.cellphone,
            email: bundle.email,
            phone: bundle.phone,
        });
    }

    render() {
        return (
            <View style={styles.screen}>
                <MapView
                    style={styles.mapview}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                >
                    <Marker
                        draggable
                        coordinate={this.state.region}
                        onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
                    />
                </MapView>
                <View style={styles.wrapper}>
                    <View style={styles.inforow}>
                        <FontAwesome
                            name="map-marker"
                            size={35} color="#B10D65"
                            style={{ marginLeft: 5 }}
                        />
                        <View style={{ width: 11 }} />
                        <Text style={styles.info}>
                            {this.state.address}
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <Entypo name="phone" size={33} color="#B10D65" />
                        <Text style={styles.info}>
                            {this.state.cellphone}
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <MaterialCommunityIcons name="gmail" size={33} color="#B10D65" />
                        <Text style={styles.info}>
                            {this.state.email}
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <Entypo name="mobile" size={33} color="#B10D65" />
                        <Text style={styles.info}>
                            {this.state.phone}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#dbf0ff',
        padding: 10,
    },

    mapview: {
        width: width - 20,
        height: height / 3,
        backgroundColor: 'white',
        elevation: 5
    },

    wrapper: {
        height: height / 2.6,
        marginTop: 5,
        backgroundColor: '#fff',
        elevation: 5
    },

    inforow: {
        margin: 8.9,
        padding: 6,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#B10D65'
    },

    info: {
        color: '#B10D65',
        fontSize: 10,
        textAlignVertical: 'center',
        marginLeft: 20,
    }
});

const mapStateToProps = state => ({
    shopId: state.shop.shopId
});

export default connect(mapStateToProps)(ContactScreen);
