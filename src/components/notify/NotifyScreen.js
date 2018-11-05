import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default class NotifyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.screen}>
                <View style={styles.row}>
                    <Foundation name="burst-sale" size={35} color="#B10D65" />
                    <Text style={styles.txtinfo}>Discounted up to 70% for all items</Text>
                    <Text style={styles.txtdate}>20-10-2018</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#dbf0ff',
    },

    row: {
        width: width - 20,
        marginTop: 5,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 5
    },
    
    txtinfo: {
        fontSize: 12,
        marginLeft: 10,
        marginTop: 10
    },

    txtdate: {
        paddingTop: 30,
        fontSize: 8
    }
});
