import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import AppTabNavigation from './AppTabNavigation';
import MenuStackNavigation from '../menu/MenuStackNavigation';
import Login from '../menu/LoginScreen';


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
    TabNavigation: AppTabNavigation,
    Menu: MenuStackNavigation
}, {
        drawerWidth: width * 0.85,
        contentComponent: props => <MenuStackNavigation {...props} />
    }
);

export default connect()(Shop);
