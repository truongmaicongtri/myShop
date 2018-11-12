import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

class UserRatingHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3,
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        const showAlert = () => {
            Alert.alert(
                'Thank for your rating'
            );
        };
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.container}>
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
                <View style={styles.ratingwrapper}>
                    <Text style={styles.txtrate}>King Shop</Text>
                    <View style={styles.rate}>
                        <StarRating
                            disabled={true}
                            emptyStar={'md-star-outline'}
                            fullStar={'md-star'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'red'}
                            emptyStarColor={'red'}
                        />
                        <View style={{ justifyContent: 'center' }}>
                            <Text
                                style={styles.ratenumber}
                            >
                                Rating: {this.state.starCount} / 5
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.date}>20-10-2018</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67adfc',
        justifyContent: 'flex-start',
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
        height: height / 4.5,
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
export default UserRatingHistory;