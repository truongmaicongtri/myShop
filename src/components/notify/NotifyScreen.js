import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ListView } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { GET_NOTIFICATION_URL } from '../../backend/url';

class NotifyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        };
    }

    async componentDidMount() {
        const response = await fetch(GET_NOTIFICATION_URL, { method: 'POST', body: null });
        const messages = await response.json();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(messages)
        });
        this.handleChangeNumberOfNotification(messages.length);
    }

    handleChangeNumberOfNotification(number) {
        this.props.changeNotification(number);
    }

    renderRow(mesages) {
        return (
            <View style={styles.row}>
                <Foundation name="burst-sale" size={35} color="#B10D65" />
                <Text style={styles.txtinfo}>{mesages.detail}</Text>
                <Text style={styles.txtdate}>{mesages.date}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.screen}>
                <View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#dbf0ff',
        paddingTop: 10,
    },

    row: {
        // width: width - 30,
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 5
    },

    txtinfo: {
        width: width / 1.5,
        fontSize: 12,
        marginLeft: 10,
        marginTop: 10,
        overflow: 'hidden',
    },

    txtdate: {
        paddingTop: 30,
        fontSize: 8
    }
});

export default connect(null, actions)(NotifyScreen);
