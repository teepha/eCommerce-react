import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as authActions from '../../store/actions/auth';
import {bindActionCreators} from 'redux';
import * as Actions from '../../store/actions';
import customerService from '../../services/customerService';

class Auth extends Component {

    constructor(props)
    {
        super(props);
        this.loginCheck();
    }

    loginCheck = () => {

        let access_token = customerService.getAccessToken();

        if (!access_token) {
            return;
        }

        if (customerService.isAuthTokenValid(access_token)) {
            customerService.setSession(access_token);

            this.props.showToast({message: 'Logging In'});

            customerService.getCustomer()
                .then(customer => {
                    this.props.setUserData({customer});
                    this.props.showToast({message: 'Logged In'});
                })
                .catch(error => {
                    this.props.showToast({message: error.data.message});
                })
        } else {
            customerService.setSession(null);
            this.props.showToast({message: 'Your Session has Expired'});
            this.props.logout();
        }
    };

    render()
    {
        const {children} = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            logout             : authActions.logoutUser,
            setUserData        : authActions.setUserData,
            showToast        : Actions.showToast
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
