import React from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import AuthDialog from "../components/AuthDialog";
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppContext from '../../AppContext';
import systemConfig from '../../config/system';
import CartDialog from '../components/CartDialog';
import Toast from "../../components/Alerts/Toast";


const styles = theme => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    content: {
        position: 'relative',
        display: 'flex',
        overflow: 'auto',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex: 2
    }
});

const dashboardRoutes = [];

class Layout extends React.Component {

    render() {
        const {children } = this.props;

        return (<AppContext.Consumer>
            {({routes}) => (
                <div>
                    <Header
                        color="dark"
                        routes={dashboardRoutes}
                        brand={systemConfig.appName}
                        fixed
                    />
                    {
                        renderRoutes(routes)
                    }
                    {children}
                    <Footer/>
                    <CartDialog />
                    <AuthDialog />
                    <Toast />
                </div>
            )}
        </AppContext.Consumer>)
    };
}


function mapStateToProps({products}) {
    return {
        products: products.all.data.rows,
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(Layout)));
