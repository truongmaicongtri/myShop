import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class ChangePasswordScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.shopname}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="md-arrow-round-back" size={40} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>
                        My Shop
                    </Text>
                    <TouchableOpacity style={{ marginTop: 5 }}>
                        <Ionicons name="ios-happy" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style={styles.txtrow} placeholder="OLD PASSWORD" />
                    <TextInput style={styles.txtrow} placeholder="NEW PASSWORD" />
                    <TextInput style={styles.txtrow} placeholder="CONFIRM PASSWORD" />
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnedit}>
                        <Text style={styles.txtButton}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnchange}>
                        <Text style={styles.txtButton}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const drawerWidth = width * 0.85;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67adfc',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 60,
    },
    shopname: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 60
    },
    txtrow: {
        backgroundColor: '#fff',
        marginTop: 15,
        height: height / 13,
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: '#268bff',
        borderRadius: height / 13,
        elevation: 5,
    },

    btn: {
        marginTop: 20,
        flexDirection: 'row'
    },

    btnedit: {
        backgroundColor: '#268bff',
        width: (drawerWidth - 47.5) / 2,
        height: height / 13,
        padding: 20,
        borderTopLeftRadius: height / 13,
        borderBottomLeftRadius: height / 13,
        justifyContent: 'center',
        elevation: 5,
    },

    btnchange: {
        backgroundColor: '#268bff',
        width: (drawerWidth - 47.5) / 2,
        height: height / 13,
        padding: 20,
        borderTopRightRadius: height / 13,
        borderBottomRightRadius: height / 13,
        justifyContent: 'center',
        elevation: 5,
        marginLeft: 5,
    },

    txtButton: {
        textAlign: 'center',
        color: '#fff'
    }
});

export default ChangePasswordScreen;
