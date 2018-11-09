import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

class UserCheckOutHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.shopname}>
                    <TouchableOpacity>
                        <Ionicons name="md-arrow-round-back" size={40} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>
                        Order History
                    </Text>
                    <TouchableOpacity style={{ marginTop: 5 }}>
                        <Ionicons name="ios-happy" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity>
                        <View style={styles.namecus}>
                            <Text style={styles.titlerow}>Customer's Name: </Text>
                            <Text style={styles.contentrow}>David Beckam</Text>
                        </View>
                        <View style={styles.dateorder}>
                            <Text style={styles.titlerow}>Order time: </Text>
                            <Text style={styles.contentrow}>14:50PM 26-05-2018</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.orderinfo}>
                        <View style={styles.cellinfo}>
                            <Text style={styles.titlerowoder}>Order ID</Text>
                            <Text style={styles.contentrowoder}>1531200040</Text>
                        </View>
                        <View style={styles.cellinfo}>
                            <Text style={styles.titlerowoder}>Order Amount</Text>
                            <Text style={styles.contentrowoder}>5.000.000 VND</Text>
                        </View>
                        <View style={styles.cellinfo}>
                            <Text style={styles.titlerowoder}>Payment Type</Text>
                            <Text style={styles.contentrowoder}>Credit Card</Text>
                        </View>
                    </View>
                    <View style={styles.address}>
                        <MaterialIcons name="place" size={23} color="#BCBCBC" />
                        <Text style={styles.addtxt}>
                            255, Dong Khoi st, Thu Dau Mot, Binh Duong Newcity
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightColor: '#268bff',
        backgroundColor: '#c5a4f2',
        padding: 10,
    },

    wrapper: {
        backgroundColor: '#fff',
        height: height / 3.5,
        padding: 10,
        borderRadius: 10
    },

    shopname: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 60
    },

    namecus: {
        flexDirection: 'row'
    },

    dateorder: {
        flexDirection: 'row'
    },

    titlerow: {
        color: '#BCBCBC',
        fontSize: 13,
        width: width / 2,
    },

    contentrow: {
        color: '#B10D65',
        fontSize: 13,
        width: width / 2,
    },

    titlerowoder: {
        color: '#BCBCBC',
        fontSize: 13,
        width: width / 2,
        textAlign: 'center'
    },

    contentrowoder: {
        color: '#B10D65',
        fontSize: 13,
        width: width / 2,
        textAlign: 'center'
    },

    orderinfo: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#000',
        borderTopColor: '#000',
        paddingBottom: 5,
        paddingTop: 5
    },

    cellinfo: {
    },

    address: {
        flexDirection: 'row',
        marginTop: 10
    },

    addtxt: {
        color: '#B10D65',
        fontSize: 13
    }

});
export default UserCheckOutHistory;
