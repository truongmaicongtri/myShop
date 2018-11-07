import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions, TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class UserInfoScreen extends Component {
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
                    <TextInput style={styles.txtrow} placeholder="FIRST NAME" />
                    <TextInput style={styles.txtrow} placeholder="LAST NAME" />
                    <TextInput style={styles.txtrow} placeholder="USERNAME" />
                    <TextInput style={styles.txtrow} placeholder="EMAIL" />
                    <TextInput style={styles.txtrow} placeholder="ADDRESS" />
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnedit}>
                        <Text style={styles.txtButton}>Edit Information</Text>
                    </TouchableOpacity>
                    <View style={{ width: 5 }} />
                    <TouchableOpacity
                        style={styles.btnchange}
                        onPress={() => navigation.navigate('ChangePassword')}
                    >
                        <Text style={styles.txtButton}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c5a4f2',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 60,
    },
    shopname: {

        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 30,
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
        width: ((width / 35) * 11) - 3,
        height: height / 13,
        padding: 10,
        borderTopLeftRadius: height / 13,
        borderBottomLeftRadius: height / 13,
        justifyContent: 'center',
        elevation: 5,
    },

    btnchange: {
        backgroundColor: '#268bff',
        width: ((width / 35) * 11) - 3,
        height: height / 13,
        padding: 10,
        borderTopRightRadius: height / 13,
        borderBottomRightRadius: height / 13,
        justifyContent: 'center',
        elevation: 5,
    },

    txtButton: {
        textAlign: 'center',
        color: '#fff'
    }
});

export default UserInfoScreen;
