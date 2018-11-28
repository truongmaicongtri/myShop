import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { currentShop } from '../../data';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const shopInfo = currentShop.shopInfo;

export default class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: shopInfo.latitude,
                longitude: shopInfo.longitude,
                latitudeDelta: 0.002,
                longitudeDelta: 0.002,
            },
        };
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
                            {shopInfo.address}
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <Entypo name="phone" size={33} color="#B10D65" />
                        <Text style={styles.info}>
                            {shopInfo.phoneNumber}
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <MaterialCommunityIcons name="gmail" size={33} color="#B10D65" />
                        <Text style={styles.info}>
                            {shopInfo.email}
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <Entypo name="mobile" size={33} color="#B10D65" />
                        <Text style={styles.info}>
                            {shopInfo.mobile}
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
