import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import BottomBarNavigator from './BottomBarNavigator';
import MenuStackNavigation from '../menu/MenuStackNavigation';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <DrawerNavigation />
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

export default connect()(Shop);
