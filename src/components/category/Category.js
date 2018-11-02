import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    ListView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Category extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const category = this.props.navigation.getParam('category');
        const data = category.listItem;
        this.state = {
            dataSource: ds.cloneWithRows(data)
        };
    }

    renderRow(dataSource) {
        return (
            <View style={styles.productContainer}>
                <Image source={dataSource.img[0]} style={styles.productImg} />
                <View style={styles.productInfo}>
                    <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('DetailProduct',
                            { item: dataSource })}
                    >
                        <Text style={styles.textName}>{dataSource.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.textPrice}>{dataSource.cost}</Text>
                    <Text style={styles.textMater}>Material: Cotton</Text>
                    <Text>Color: Black</Text>
                </View>
                <TouchableOpacity style={styles.iconstyle}>
                    <Ionicons name="ios-cart" size={30} color="#B10D65" />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const category = this.props.navigation.getParam('category');
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.screen}>
                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name="md-arrow-back" size={35} color="#B10D65" />
                            </TouchableOpacity>
                            <Text style={styles.title}>{category.name}</Text>
                            <View style={{ width: 30 }} />
                        </View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#dbf0ff',
    },

    wrapper: {
        backgroundColor: '#fff',
        margin: 10,
        paddingHorizontal: 10,
        elevation: 5
    },

    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        color: '#B10D65'
    },

    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#D6D6D6',
        borderWidth: 1,
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        justifyContent: 'space-around',
    },

    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1,
        paddingBottom: 100

    },

    productImg: {
        width: 150,
        height: (150 / 783) * 1200,
    },

    lastrowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textName: {
        fontSize: 20,
        fontWeight: '400',
        color: '#BCBCBC',
    },

    textPrice: {
        color: '#B10D65'
    },

    textMater: {

    },

    textColor: {
        fontSize: 20,
        color: '#00A6AD'
    },

    textDetail: {
        fontSize: 10,
        color: '#B10D65',
        marginTop: 20
    },

    iconstyle: {
        justifyContent: 'flex-end'
    }
});
