import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import BottomBarNavigator from './BottomBarNavigator';
import MenuStackNavigation from '../menu/MenuStackNavigation';
import ChooseShopScreen from './ChooseShopScreen';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    componentWillReceiveProps(newProps) {
        if (this.props.isReady !== newProps.shopId) {
            this.setState({
                isReady: newProps.isReady
            });
        }
    }

    render() {
        if (this.state.isReady) {
            return (
                <DrawerNavigation />
            );
        }
        return (
            <ChooseShopScreen />
        );
    }
}


const { width } = Dimensions.get('window');
const DrawerNavigation = createDrawerNavigator({
    BottomBar: BottomBarNavigator,
    Menu: MenuStackNavigation
}, {
        drawerWidth: width * 0.85,
        contentComponent: props => <MenuStackNavigation {...props} />
    }
);

const mapStateToProps = state => ({
    isReady: state.shop.isReady,
});

export default connect(mapStateToProps, null)(Shop);
