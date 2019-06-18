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
import styles from './styles';

function PaperComponent(props) {
    return (
        <Paper {...props} style={{width: "820px", height: "600px"}}/>
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
        const loadingNext = false;

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
                            <div className="w-1/2">
                                <span className={classes.titleText}>Login / Sign Up</span>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <span className={classes.closeButton} onClick={this.handleClose}>X</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-grow flex-col" style={{height: "450px"}}>
                            {register ? <RegisterForm/> : <LoginForm/>}
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2 pl-8">
                                {register && <Link color="primary"
                                                   className={classes.submitButtonText}
                                                   onClick={this.handleLoginNav.bind(this)}
                                >
                                    Go to Login</Link>}
                            </div>
                            <div className="w-1/2 flex justify-end pr-8">
                                {!register && <Link color="primary"
                                                    className={classes.submitButtonText}
                                                    onClick={this.handleRegisterNav.bind(this)}
                                >
                                    Register</Link>}
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
