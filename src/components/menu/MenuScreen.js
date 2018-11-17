import React from 'react';
import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import UserControlScreen from './UserControlScreen';

class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        switch (this.props.isLogin) {
            case false:
                return (
                    <LoginScreen navigate={navigate} />
                );
            case true:
                return (
                    <UserControlScreen navigate={navigate} />
                );
            default:
                break;
        }
    }
}

const mapStateToProps = state => ({
    isLogin: state.login.isLogin
});

export default connect(mapStateToProps, null)(MenuScreen);
