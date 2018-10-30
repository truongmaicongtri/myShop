import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Category extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.screen}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Category screen</Text>
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
        backgroundColor: '#dbf0ff'
    }
});
