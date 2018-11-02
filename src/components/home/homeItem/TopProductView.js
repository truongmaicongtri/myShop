import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ListView
} from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');


class TopProduct extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        //get listItem
        const { listItem } = this.props.category;

        //create data
        const data = [];

        //convert listItem to data (2 items on a line)
        const lineOfListView = (listItem.length % 2 === 0) ?
            listItem.length / 2 : (listItem.length - 1) / 2;
        for (let index = 0; index < lineOfListView; index++) {
            const dataItem = { item1: listItem[index * 2], item2: listItem[(index * 2) + 1] };
            data.push(dataItem);
        }
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    renderRow(dataSource) {
        return (
            <View style={styles.body}>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('DetailProduct', { item: dataSource.item1 }); }}
                    style={styles.productContainer}
                    delayPressIn={100}
                >
                    <Image source={dataSource.item1.img[0]} style={styles.imgStyle} />
                    <Text style={styles.productname}>{dataSource.item1.name}</Text>
                    <Text style={styles.productprice}>{dataSource.item1.cost} VND</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('DetailProduct', { item: dataSource.item2 }); }}
                    style={styles.productContainer}
                    delayPressIn={100}
                >
                    <Image source={dataSource.item2.img[0]} style={styles.imgStyle} />
                    <Text style={styles.productname}>{dataSource.item2.name}</Text>
                    <Text style={styles.productprice}>{dataSource.item2.cost} VND</Text>
                </TouchableOpacity>
            </View>

        );
    }

    render() {
        const { navigation } = this.props;
        const { category } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titlecontainer}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Category', { category })
                        }
                        activeOpacity={this.state.scrollBegin ? 1.0 : 0}
                        delayPressIn={100}
                    >
                        <Text style={styles.title}> {category.name} </Text>
                    </TouchableOpacity>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View >
        );
    }
}
//783 * 1200
const productwidth = (width - 60) / 2;
const productimgheight = (productwidth / 783) * 1200;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        elevation: 5,
    },

    titlecontainer: {
        justifyContent: 'center',
        height: 50,
        paddingLeft: 10,
        marginBottom: 20
    },

    title: {
        color: '#AFAEAF',
        fontSize: 25
    },

    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },

    productContainer: {
        width: productwidth,
        marginBottom: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2
    },

    imgStyle: {
        width: productwidth,
        height: productimgheight
    },

    productname: {
        marginTop: 10,
        paddingLeft: 10,
        fontWeight: '500',
        color: '#D3D3CF',
        marginBottom: 10
    },

    productprice: {
        paddingLeft: 10,
        color: '#662F90'
    }
});

export default TopProduct;
