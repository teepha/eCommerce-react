import React, {Component} from 'react';
import {
    Paper,
    Dialog,
    DialogContent,
    withStyles,
    Link
} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';
import * as Actions from '../../../store/actions/alerts';
import Close from '@material-ui/icons/Close';
import styles from './styles';

function PaperComponent(props) {
    return (
        <Paper {...props} style={{width: "auto", maxWidth: "450px", height: "auto"}}/>
    );
}

class AuthDialog extends Component {

    state = {
        open: false,
        completed: false
    };

    handleClose = () => {
        this.props.hideAuth();
    };


    handleRegisterNav() {
        this.props.switchTab(true);
    }

    handleLoginNav() {
        this.props.switchTab(false);
    }

    render() {
        const {classes, register} = this.props;


        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    PaperComponent={PaperComponent}
                    maxWidth="lg"
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogContent style={{overflow: 'hidden'}}>
                        <div className="flex mb-4 h-8">
                            <div className="w-3/4">
                                {register &&
                                  <span className={classes.titleText}>Register / Sign Up</span>
                                }
                                {!register &&
                                  <span className={classes.titleText}>Log In</span>
                                }
                            </div>
                            <div className="w-1/4 flex justify-end">
                                <Close onClick={this.handleClose} style={{cursor: 'pointer'}} />
                            </div>
                        </div>
                        <div className="w-full flex flex-grow flex-col">
                            {register ? <RegisterForm/> : <LoginForm/>}
                        </div>
                        <div>
                            <div className="w-full flex justify-center">
                                {register && <Link color="primary"
                                                   className={classes.submitButtonText}
                                                   onClick={this.handleLoginNav.bind(this)}
                                                   style={{color: 'red'}}
                                >
                                    Go to Login</Link>}
                            </div>
                            <div className="w-full flex justify-center">
                                {!register &&
                                  <Link color="primary"
                                    className={classes.submitButtonText}
                                    onClick={this.handleRegisterNav.bind(this)}
                                    style={{color: 'red', marginLeft: '3px'}}
                                  >
                                    Register / Sign Up
                                  </Link>
                                }
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideAuth: Actions.hideAuth,
        switchTab: Actions.switchTab
    }, dispatch);
}

function mapStateToProps({alerts}) {
    return {
        open: alerts.auth.open,
        register: alerts.auth.register
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AuthDialog));
