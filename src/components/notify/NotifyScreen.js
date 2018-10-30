import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>NotifyScreen screen</Text>
                    <Text>Quay lại</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dbf0ff',
    }
});
