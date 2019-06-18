import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import {matchRoutes} from 'react-router-config'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Layouts from './Layouts';
import AppContext from '../AppContext';

const styles = theme => ({
    container: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    }
});

class LayoutHandler extends Component {

    constructor(props, context) {
        super(props);
        this.appContext = context;

    }

    getRouteSettings = () => {
        const {routes} = this.appContext;

        const matched = matchRoutes(routes, this.props.location.pathname)[0];

        if (matched && matched.route.settings) {
           return matched.route.settings;
        } else {
           return { }
        }
    };

    render() {
        const {classes} = this.props;

        const settings = this.getRouteSettings();

        if (settings && settings.layout && settings.layout.style) {
            const Layout = Layouts[settings.layout.style];

            return (
                <Layout className={classes.container} {...this.props}/>
            );
        }

        return null;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps() {
    return {}
}

LayoutHandler.contextType = AppContext;

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutHandler)));
