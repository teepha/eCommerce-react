/**
 * This is displayed in the home component to display the department and categories in the department
 * currently, this display only one department with three categories under it. 
 * You are expected to display the selected department in the Footer and categories under the department
 * dynamically from the backend each time the user change department in the footer
 */
import React, {Component} from 'react';
import { withStyles} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../../store/actions/alerts/toast.actions';
import styles from './styles';

class TextGrid extends Component {

    render() {
        const {classes } = this.props;
        return (<div className="sm:hidden w-full lg:max-w-full lg:flex">
                <div className={`w-full bg-cover text-center overflow-hidden ${classes.image}`}>
                    <div className="py-8 px-16">
                        <div className={`text-left pb-4 ${classes.title}`}>
                            Regional
                        </div>
                        <div className="flex flex-wrap h-40 w-2/3">
                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 text-left">
                                        <Link to={`/department/1/category/1`} className={classes.navLink}>
                                            French
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 text-left">
                                        <Link to={`/department/1/category/1`} className={classes.navLink}>
                                            Irish
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 text-left">
                                        <Link to={`/department/1/category/1`} className={classes.navLink}>
                                            Italia
                                        </Link>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TextGrid));
