import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 11.053683,
                longitude: 106.666986,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    render() {
        const { navigate } = this.props.navigation;
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
                        <FontAwesome name="map-marker" size={33} color="#B10D65" />
                        <View style={{ width: 10 }} />
                        <Text style={styles.info}>
                            255, Nam Ky Khoi Nghia st, Binh Duong Newcity
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <Entypo name="phone" size={33} color="#B10D65" />
                        <View style={{ width: 10 }} />
                        <Text style={styles.info}>
                            (+84)0397408460
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <MaterialCommunityIcons name="gmail" size={33} color="#B10D65" />
                        <View style={{ width: 10 }} />
                        <Text style={styles.info}>
                            tienbui237.550@gmail.com
                        </Text>
                    </View>
                    <View style={styles.inforow}>
                        <Entypo name="mobile" size={33} color="#B10D65" />
                        <View style={{ width: 10 }} />
                        <Text style={styles.info}>
                            (+84)0397408460
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
        height: height / 3
    },

    wrapper: {
        height: height / 2.6,
        marginTop: 5,
        backgroundColor: '#fff'
    },

    inforow: {
        margin: 8.9,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#B10D65'
    },

    info: {
        color: '#B10D65',
        fontSize: 10,
        textAlignVertical: 'center'
    }
});
