import React from "react";
import PropTypes from "prop-types";
import { withStyles, Link, Badge, Hidden } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import * as alertActions from "../../../../store/actions/alerts";
import { verifyToken } from "../../../../config/verifyToken";

const links = [
  {
    title: "Daily Deals",
    link: "/"
  },
  {
    title: "Sell",
    link: "/"
  },
  {
    title: "Help & Contact",
    link: "/"
  }
];

class TopBar extends React.Component {
  state = {
    customerName: ""
  };

  componentDidMount() {
    if (verifyToken() !== null) {
      this.setState({
        customerName: verifyToken().name
      });
    }
  }

  render() {
    const {
      classes,
      shoppingCartItems,
      itemsTotalAmount
      //   customerData
    } = this.props;
    console.log("TOP-BAR>>>>", this.props);

    return (
      <AppBar className={classes.topBar}>
        <Toolbar className={classes.toolbar}>
          {verifyToken() === null ? (
            <div className={classes.authText + " " + classes.divTopBar}>
              <span>Hi!</span>
              <Link
                onClick={() => {
                  this.props.showAuth(false);
                }}
                className={classes.authLink}
                id="btnSignIn"
                style={{ color: "red" }}
              >
                Sign in
              </Link>
              <span>or</span>
              <Link
                onClick={() => {
                  this.props.showAuth(true);
                }}
                className={classes.authLink}
                id="btnRegister"
                style={{ color: "red" }}
              >
                Register
              </Link>
            </div>
          ) : (
            <div className={classes.authText + " " + classes.divTopBar}>
              <span>Hi {this.state.customerName}</span>
              <Link className={classes.authLink} style={{ color: "red" }}>
                My Profile
              </Link>
              <span>|</span>
              <Link
                className={classes.authLink}
                id="btnLogout"
                style={{ color: "red" }}
              >
                Logout
              </Link>
            </div>
          )}
          <Hidden mdDown className={classes.divTopBar}>
            <div className={classes.linksContainer}>
              {links.map((item, index) => (
                <Button key={index} classes={{ root: classes.button }}>
                  <Link to={item.link} className={classes.navLink}>
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </Hidden>
          <Hidden mdDown className={classes.divTopBar}>
            <div className={classes.currencyIconContainer}>
              <span className="flag-icon flag-icon-gb" />
            </div>
            <div className={classes.currencyContainer}>
              <div className={classes.currencyText}>GBR</div>
            </div>
          </Hidden>
          <div className={classes.divTopBar}>
            <div
              className={classes.iconContainer}
              id="menuCartLink"
              onClick={() => {
                this.props.showCart();
              }}
            >
              <Badge
                classes={{ badge: classes.badge }}
                badgeContent={shoppingCartItems && shoppingCartItems.length}
                color="primary"
              >
                <img
                  alt="Shopping Cart Icon"
                  src="/assets/icons/shopping-cart-black.svg"
                />
              </Badge>
            </div>
            <div className={classes.yourBag} style={{ color: "black" }}>
              Your Bag: $<span id="menuCartTotalPrice">{itemsTotalAmount}</span>
            </div>
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
  return bindActionCreators(
    {
      showCart: alertActions.showCart,
      showAuth: alertActions.showAuth
      //   createCustomer: customerActions.createCustomer
    },
    dispatch
  );
}

const mapStateToProps = ({ shoppingCart, customer }) => {
  return {
    shoppingCartItems: shoppingCart.cart.data,
    itemsTotalAmount: shoppingCart.cart.totalAmount
    // customerData: customer.user.data
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopBar)
);
