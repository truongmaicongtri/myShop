import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import AppTabNavigation from './AppTabNavigation';
import Menu from './Menu';


export default class Shop extends Component {
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
                content={<Menu />}
                openDrawerOffset={0.3}
                tapToClose
                side={'left'}
            >
                <AppTabNavigation open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
