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
            starCount: 0,
            stringrating: ''
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
        return (
            <ScrollView style={styles.container}>
                <View style={styles.shopname}>
                    <TouchableOpacity>
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
                    <Text style={styles.txtrate}>Rate for us</Text>
                    <View style={styles.rate}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'yellow'}
                        />
                    </View>
                    <Text style={styles.ratenumber}>Rating: {this.state.starCount} / 5</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={showAlert} style={styles.button}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: 'center'
                                }}
                            >
                                Update
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c5a4f2',
        padding: 10
    },

    shopname: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 60
    },

    ratingwrapper: {
        backgroundColor: '#fff',
        height: height / 2.3,
        padding: 10,
        borderRadius: 15
    },

    txtrate: {
        fontSize: 25,
        textAlign: 'center'
    },

    rate: {
        marginTop: 20
    },

    ratenumber: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
    },

    button: {
        backgroundColor: '#268bff',
        height: height / 14,
        width: width / 2,
        justifyContent: 'center',
        borderRadius: height / 14,
        marginTop: height / 13
    }
});
export default UserRatingHistory;
