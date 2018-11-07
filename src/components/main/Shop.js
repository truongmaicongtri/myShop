import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import AppTabNavigation from './AppTabNavigation';
import MenuStackNavigation from '../menu/MenuStackNavigation';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<MenuStackNavigation />}
                openDrawerOffset={0.25}
                tapToClose
                side={'left'}
            >
                <AppTabNavigation open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}

export default Shop;
