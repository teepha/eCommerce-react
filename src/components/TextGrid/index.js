import React, {Component} from 'react';
import { withStyles} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../../store/actions/alerts/toast.actions';
import styles from './styles';

class TextGrid extends Component {

    render() {
        const {classes, categories, department } = this.props;
        return (<div className="sm:hidden w-full lg:max-w-full lg:flex">
                <div className={`w-full bg-cover text-center overflow-hidden ${classes.image}`}>
                    <div className="py-8 px-16">
                        <div className={`text-left pb-4 ${classes.title}`}>
                            {department.name}
                        </div>
                        <div className="flex flex-wrap h-40 w-2/3">
                            {
                                categories && categories.map((item, index) => (
                                    <div key={index} className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 text-left">
                                        <Link to={`/department/${department.department_id}/category/${item.category_id}`} className={classes.navLink}>
                                            {item.name}
                                        </Link>
                                    </div>
                                ))
                            }
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
