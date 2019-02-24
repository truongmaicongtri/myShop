import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, Dimensions,
    TouchableOpacity,
    ScrollView, ListView
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import NumberFormat from 'react-number-format';
import { GET_ORDER_HISTORY_URL } from '../../backend/url';


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

class UserOrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        };
    }

    async componentDidMount() {
        const url = GET_ORDER_HISTORY_URL(this.props.username);
        const response = await fetch(url, { method: 'POST', body: null });
        const orders = await response.json();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(orders)
        });
    }

    renderRow(order) {
        return (
            <View style={styles.wrapper}>
                <View style={styles.orderHeading}>
                    <View style={{ flex: 2 }}>
                        <TouchableOpacity>
                            <View style={styles.namecus}>
                                <Text style={styles.titlerow}>Shop name: </Text>
                                <Text style={styles.contentrow}>{order.shopname}</Text>
                            </View>
                            <View style={styles.dateorder}>
                                <Text style={styles.titlerow}>Order time: </Text>
                                <Text style={styles.contentrow}>{order.ordertime}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#B10D65' }}>{order.state.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.orderinfo}>
                    <View style={styles.cellinfo}>
                        <Text style={styles.titlerowoder}>Order ID</Text>
                        <Text style={styles.contentrowoder}>{10002200 + order.orderid}</Text>
                    </View>
                    <View style={styles.cellinfo}>
                        <Text style={styles.titlerowoder}>Order Amount</Text>
                        <NumberFormat
                            displayType={'text'}
                            value={order.amount}
                            thousandSeparator=','
                            renderText={value =>
                                <Text style={styles.contentrowoder}>{value} VND</Text>
                            }
                        />
                    </View>
                    <View style={styles.cellinfo}>
                        <Text style={styles.titlerowoder}>Payment Type</Text>
                        <Text style={styles.contentrowoder}>{order.paymentType}</Text>
                    </View>
                </View>
                <View style={styles.address}>
                    <MaterialIcons name="place" size={23} color="#BCBCBC" />
                    <Text numberOfLines={3} style={styles.addtxt}>
                        {order.address}
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#72b2f9', '#eaafc8']}
                style={styles.container}
            >
                <ScrollView>
                    <View style={styles.shopname}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name="md-arrow-round-back" size={40} color="#fff" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>
                            Orders
                    </Text>
                        <TouchableOpacity style={{ marginTop: 5 }}>
                            <Ionicons name="ios-happy" size={35} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        enableEmptySections
                    />
                </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4d6fd',
        padding: 10,
        paddingTop: 60,
    },
    shopname: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 30,
    },
    wrapper: {
        backgroundColor: '#fff',
        height: height / 4.3,
        padding: 8,
        borderRadius: 10,
        marginBottom: 10
    },

    namecus: {
        flexDirection: 'row'
    },

    dateorder: {
        flexDirection: 'row'
    },

    titlerow: {
        flex: 1,
        color: '#BCBCBC',
        fontSize: 11,
    },

    contentrow: {
        flex: 1,
        color: '#B10D65',
        fontSize: 11,
    },

    titlerowoder: {
        color: '#BCBCBC',
        fontSize: 11,
        width: width / 2,
        textAlign: 'center'
    },

    contentrowoder: {
        color: '#B10D65',
        fontSize: 11,
        width: width / 2,
        textAlign: 'center'
    },

    orderHeading: {
        flexDirection: 'row',
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
        fontSize: 11,
        flex: 1
    }

});
const mapStateToProps = state => ({
    username: state.login.username
});

export default connect(mapStateToProps, null)(UserOrderHistory);
