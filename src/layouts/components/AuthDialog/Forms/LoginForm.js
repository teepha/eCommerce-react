import React, {Component} from 'react';
import {Button, InputAdornment, CircularProgress, withStyles} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {TextFieldFormsy} from '../../../../components/Formsy';
import Formsy from 'formsy-react';
import * as authActions from '../../../../store/actions/auth';
import styles from './styles';

class LoginForm extends Component {

    state = {
        canSubmit: false
    };

    form = React.createRef();

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        this.props.submitLogin(model);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.login.error && (this.props.login.error.email || this.props.login.error.password)) {
            this.form.updateInputsWithError({
                ...this.props.login.error
            });

            this.props.login.error = null;
            this.disableButton();
        }

        return null;
    }

    render() {
        const {loginLoading} = this.props;
        const {canSubmit} = this.state;

        return (
            <div className="w-full flex flex-row justify-center">
                <Formsy
                    onValidSubmit={this.onSubmit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    ref={(form) => this.form = form}
                    className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
                >
                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="text"
                        name="email"
                        label="Username/Email"
                        validations={{
                            minLength: 4
                        }}
                        validationErrors={{
                            minLength: 'Min character length is 4'
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><EmailIcon className="text-20" color="action"/></InputAdornment>
                        }}
                        variant="outlined"
                        helperText={this.props.login.error && this.props.login.error.email ? this.props.login.error.email : ''}
                        required
                    />

                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="password"
                        name="password"
                        label="Password"
                        validations={{
                            minLength: 4
                        }}
                        validationErrors={{
                            minLength: 'Min character length is 4'
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><PasswordIcon className="text-20"
                                                                                       color="action"/></InputAdornment>
                        }}
                        variant="outlined"
                        helperText={this.props.login.error && this.props.login.error.password ? this.props.login.error.password : ''}
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full mx-auto mt-16 normal-case"
                        aria-label="LOG IN"
                        disabled={!canSubmit}
                        value="legacy"
                    >
                        {loginLoading ? <CircularProgress size={20} color="secondary" style={{margin: 4}}/> : 'Login'}
                    </Button>

                </Formsy>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitLogin: authActions.submitLogin
    }, dispatch);
}

function mapStateToProps({auth}) {
    return {
        loginLoading: auth.login.isLoading,
        login: auth.login
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
