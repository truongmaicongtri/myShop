import React, { Component } from 'react';
import {
    View, ListView,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import { GET_RATING_HISTORY_URL } from '../../backend/url';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

class UserRatingHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        };
    }

    async componentDidMount() {
        const url = GET_RATING_HISTORY_URL(this.props.username);
        const response = await fetch(url, { method: 'POST', body: null });
        const bundles = await response.json();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(bundles)
        });
    }

    renderRow(dataSource) {
        return (
            <View style={styles.ratingwrapper}>
                <Text style={styles.txtrate}>{dataSource.shopname}</Text>
                <View style={styles.rate}>
                    <StarRating
                        disabled
                        emptyStar={'md-star-outline'}
                        fullStar={'md-star'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        rating={
                            parseFloat(dataSource.ratingstar)
                        }
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={'red'}
                        emptyStarColor={'red'}
                    />
                </View>
                <Text style={styles.date}>{dataSource.date}</Text>
            </View>
        );
    }

    render() {
        const { navigation } = this.props;
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#72b2f9', '#eaafc8']}
                style={styles.container}
            >
                <ScrollView >
                    <View style={styles.shopname}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="md-arrow-round-back" size={40} color="#fff" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>
                            Rating
                    </Text>
                        <TouchableOpacity style={{ marginTop: 5 }}>
                            <Ionicons name="ios-happy" size={35} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
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
        padding: 20,
        paddingTop: 60,
    },
    shopname: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 30,
    },

    ratingwrapper: {
        backgroundColor: '#fff',
        height: height / 4,
        padding: 10,
        borderRadius: 15
    },

    txtrate: {
        fontSize: 25,
        color: '#B10D65'
    },

    rate: {
        marginTop: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#000',
        borderTopColor: '#000',
        padding: 15,
    },

    ratenumber: {
        fontSize: 15,
        textAlign: 'center',
        marginLeft: width / 12,
        justifyContent: 'center',
        color: '#B10D65'
    },

    date: {
        fontSize: 10,
        textAlign: 'right',
        marginTop: 10
    }

});
const mapStateToProps = state => ({
    username: state.login.username
});

export default connect(mapStateToProps, null)(UserRatingHistory);
