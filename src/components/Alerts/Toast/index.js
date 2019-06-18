import React, {Component} from 'react';
import {Snackbar, IconButton, withStyles, SnackbarContent, Slide} from '@material-ui/core';
import {green, amber, blue} from '@material-ui/core/colors';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Warning from '@material-ui/icons/Warning';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import Info from '@material-ui/icons/Info';
import Close from '@material-ui/icons/Close';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as Actions from '../../../store/actions/alerts/toast.actions';

const styles = theme => ({
    success: {
        backgroundColor: green[600],
        color          : '#ffffff'
    },
    error  : {
        backgroundColor: theme.palette.error.dark,
        color          : theme.palette.getContrastText(theme.palette.error.dark)
    },
    info   : {
        backgroundColor: blue[600],
        color          : '#ffffff'
    },
    warning: {
        backgroundColor: amber[600],
        color          : '#ffffff'
    }
});

const variantIcon = {
    success: <CheckCircle />,
    warning: <Warning />,
    error  : <ErrorOutline />,
    info   : <Info />
};

class Toast extends Component {

    render()
    {
        const {classes, options} = this.props;
        return (
            <Snackbar
                open={this.props.state}
                onClose={this.props.hideToast}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                TransitionComponent={(props) => (<Slide {...props} direction="down" />)}
            >
                <SnackbarContent
                    className={classNames(classes[options.variant])}
                    message={
                        <div className="flex items-center">
                            {variantIcon[options.variant] && variantIcon[options.variant]}
                            <span className="pl-2">{options.message}</span>
                        </div>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.props.hideToast}
                        >
                            <Close />
                        </IconButton>
                    ]}
                />
            </Snackbar>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        hideToast: Actions.hideToast
    }, dispatch);
}

function mapStateToProps({alerts})
{
    return {
        state  : alerts.toast.open,
        options: alerts.toast.options
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Toast));
