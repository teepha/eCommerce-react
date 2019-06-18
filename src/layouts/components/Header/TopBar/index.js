import React from "react";
import PropTypes from "prop-types";
import {withStyles, Link, Badge, Hidden} from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import styles from './styles';
import Button from "@material-ui/core/Button";
import * as alertActions from "../../../../store/actions/alerts";
import * as authActions from "../../../../store/actions/auth";

const links = [{
    title: 'Daily Deals',
    link: '/'
}, {
    title: 'Sell',
    link: '/'
}, {
    title: 'Help & Contact',
    link: '/'
}];

class TopBar extends React.Component {

    render() {

        const {
            classes,
            cartItems,
            user
        } = this.props;

        return (
            <AppBar className={classes.topBar}>
                <Toolbar className={classes.toolbar}>
                    {!this.props.user.customer ? <div className={classes.authText}>
                            Hi! <Link onClick={() => {
                            this.props.showAuth(false)
                        }} className={classes.authLink}>
                            Sign In
                        </Link> or <Link onClick={() => {
                            this.props.showAuth(true)
                        }} className={classes.authLink}>
                            Register
                        </Link>
                        </div> :
                        <div className={classes.authText}>
                            Hi {user.customer && user.customer.name}! <Link className={classes.authLink}>
                            My Profile
                        </Link> | <Link onClick={() => {
                            this.props.logout()
                        }} className={classes.authLink}>
                            Logout
                        </Link>
                        </div>}
                    <Hidden mdDown>
                        <div className={classes.linksContainer}>
                            {
                                links.map((item, index) => (
                                    <Button key={index} classes={{root: classes.button}}>
                                        <Link to={item.link} className={classes.navLink}>
                                            {item.title}
                                        </Link>
                                    </Button>
                                ))
                            }
                        </div>
                    </Hidden>
                    <Hidden mdDown>
                    <div className={classes.currencyIconContainer}>
                        <span className="flag-icon flag-icon-gb"/>
                    </div>
                    <div className={classes.currencyContainer}>
                        <div className={classes.currencyText}>GBR</div>
                    </div>
                    </Hidden>
                    <div className={classes.iconContainer} onClick={() => {
                        this.props.showCart()
                    }}>
                        {cartItems.length > 0 ? <Badge classes={{
                            badge: classes.badge
                        }}
                                                       badgeContent={cartItems.length}
                                                       color="primary">
                            <img alt="Shopping Cart Icon" src="/assets/icons/shopping-cart-black.svg"/>
                        </Badge> : <img alt="Shopping Cart Icon" src="/assets/icons/shopping-cart-black.svg"/>}
                    </div>
                    <div>
                        <div className={classes.yourBag}>Your Bag:</div>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showCart: alertActions.showCart,
        showAuth: alertActions.showAuth,
        logout: authActions.logoutUser
    }, dispatch);
}

function mapStateToProps({cart, auth}) {
    return {
        cartItems: cart.items.data,
        user: auth.user
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(TopBar));
