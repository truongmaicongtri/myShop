import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ListView } from 'react-native';
import { Foundation } from '@expo/vector-icons';

import NotifyMessage from '../../models/NotifyMessage';

const { width } = Dimensions.get('window');
const message1 = new NotifyMessage('Discounted up to 20% for all items', '20-10-2018');
const message2 = new NotifyMessage('Discounted up to 20% for all items', '15-10-2018');
const message3 =
    new NotifyMessage('Discounted up to 50% for all items with MickeyCard', '7-11-2018');

export default class NotifyScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const data = [message1, message2, message3];
        this.state = {
            dataSource: ds.cloneWithRows(data)
        };
    }

    renderRow(dataSource) {
        return (
            <View style={styles.row}>
                <Foundation name="burst-sale" size={35} color="#B10D65" />
                <Text style={styles.txtinfo}>{dataSource.message}</Text>
                <Text style={styles.txtdate}>{dataSource.date}</Text>
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
