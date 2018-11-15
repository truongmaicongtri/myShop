import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        switch (this.props.isLogin) {
            case false:
                return navigate('Login');
            case true:
                return navigate('UserControl');
            default:
                break;
        }
    }
}

const mapStateToProps = state => ({
    isLogin: state.login.isLogin
});

export default connect(mapStateToProps, actions)(MenuScreen);
