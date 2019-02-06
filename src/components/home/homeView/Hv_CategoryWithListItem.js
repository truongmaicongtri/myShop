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
import NumberFormat from 'react-number-format';

const { width } = Dimensions.get('window');


class HvCategoryWithListItem extends Component {
    constructor(props) {
        super(props);

        this.fetchProduct(this.props.category.categoryid);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        };
    }

    async fetchProduct(categoryid) {
        const url = 'http://192.168.1.12/my_shop_webservice/getProduct.php?categoryid=' + categoryid;
        const response = await fetch(url, { method: 'POST', body: null });
        const products = await response.json();

        //create data
        const data = [];

        //convert listItem to data (2 items on a line)
        const lineOfListView = (products.length % 2 === 0) ?
            products.length / 2 : (products.length - 1) / 2;
        for (let index = 0; index < lineOfListView; index++) {
            const dataItem = { product1: products[index * 2], product2: products[(index * 2) + 1] };
            data.push(dataItem);
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        });
    }

    renderRow(dataSource) {
        return (
            <View style={styles.body}>
                <View style={styles.productContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('DetailProduct',
                                { item: dataSource.product1 });
                        }}
                        delayPressIn={100}
                    >
                        <Image source={{ uri: dataSource.product1.productimgs[0] }} style={styles.imgStyle} />
                        <Text style={styles.productname}>{dataSource.product1.productname}</Text>
                        <NumberFormat
                            displayType={'text'}
                            value={dataSource.product1.price}
                            thousandSeparator=','
                            renderText={value => <Text style={styles.productprice}>{value} VND</Text>}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.productContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('DetailProduct',
                                { item: dataSource.product2 });
                        }}
                        delayPressIn={100}
                    >
                        <Image source={{ uri: dataSource.product2.productimgs[0] }} style={styles.imgStyle} />
                        <Text style={styles.productname}>{dataSource.product2.productname}</Text>
                        <NumberFormat
                            displayType={'text'}
                            value={dataSource.product2.price}
                            thousandSeparator=','
                            renderText={value => <Text style={styles.productprice}>{value} VND</Text>}
                        />
                    </TouchableOpacity>
                </View>

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
                        <Text style={styles.title}> {category.categoryname} </Text>
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
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
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
        elevation: 5,
        backgroundColor: '#fff',
        paddingBottom: 10
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

export default HvCategoryWithListItem;
