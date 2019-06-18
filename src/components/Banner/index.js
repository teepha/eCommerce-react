import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Paper} from '@material-ui/core';
import * as Actions from '../../store/actions/alerts/toast.actions';
import styles from './styles';

class Banner extends Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paperContainer}>
                <div className={classes.gridItemsContainer}>
                    <div className={classes.gridTitle}>
                        Converse
                    </div>
                    <div className={classes.gridSubtitle}>
                        Explore styles tough enough to handle all your workouts
                    </div>
                </div>
            </Paper>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideToast: Actions.hideToast
    }, dispatch);
}

function mapStateToProps({alerts}) {
    return {
        state: alerts.toast.state,
        options: alerts.toast.options
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Banner));
