import React, {Component} from 'react';
import {Button, InputAdornment, CircularProgress, withStyles} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import NameIcon from '@material-ui/icons/Person';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {TextFieldFormsy} from '../../../../components/Formsy';
import Formsy from 'formsy-react';
import * as authActions from '../../../../store/actions/auth';
import styles from './styles';

class RegisterForm extends Component {

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
        this.props.submitRegister(model);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.register.error && (this.props.register.error.email || this.props.register.error.password)) {
            this.form.updateInputsWithError({
                ...this.props.register.error
            });

            this.props.register.error = null;
            this.disableButton();
        }

        return null;
    }

    render() {
        const {registerLoading} = this.props;
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
                        name="name"
                        label="Name"
                        validations={{
                            minLength: 3
                        }}
                        validationErrors={{
                            minLength: 'Min character length is 3'
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><NameIcon className="text-20" color="action"/></InputAdornment>
                        }}
                        variant="outlined"
                        helperText={this.props.register.error && this.props.register.error.name ? this.props.register.error.name : ''}
                        required
                    />

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
                        helperText={this.props.register.error && this.props.register.error.email ? this.props.register.error.email : ''}
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
                        helperText={this.props.register.error && this.props.register.error.password ? this.props.register.error.password : ''}
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
                        {registerLoading ? <CircularProgress size={20} color="secondary" style={{margin: 4}}/> : 'Register'}
                    </Button>

                </Formsy>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitRegister: authActions.submitRegister
    }, dispatch);
}

function mapStateToProps({auth}) {
    return {
        registerLoading: auth.register.isLoading,
        register: auth.register
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
