import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ListView } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { currentShop } from '../../data';

class NotifyScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(currentShop.notifyMessages)
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

export default NotifyScreen;
