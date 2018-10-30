import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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

    onRegionChange(region) {
        this.setState({ region });
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
                <View >
                    <Text>abc</Text>
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
        justifyContent: 'space-between',
    },

    mapview: {
        width: width - 20,
        height: height / 3
    }
});
