import React from "react";
import PropTypes from "prop-types";
import {withStyles, InputBase, Badge, Drawer, Hidden, IconButton, Button, Toolbar, AppBar} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/icons/Menu';
import {
    NavDropdown,
} from 'react-bootstrap';
import { Link }  from 'react-router-dom';
import styles from './styles';
import * as alertActions from "../../../../store/actions/alerts";
import './style.css';

class NavBar extends React.Component {

    state = {
        mobileOpen: false
    };

    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }

    componentDidMount(){
      window.addEventListener('scroll', (event) => {
        const scrollpos = window.scrollY;
         if(scrollpos > 10){
           this.setState({
              activeClass: 'is-scrolled'
           })
         }else{
             this.setState({
                activeClass: 'is-ontop'
             })
         }
      });
    }

    render() {

        const {
            classes,
            brand
        } = this.props;

        const brandComponent =
        <Link to={'/'} className={classes.brand}>
          {brand}
        </Link>

        return (
            <div>
                <AppBar className={`mainHeaderHolder ${classes.navBar + ' ' + this.state.activeClass}`}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.flex}>
                            {brandComponent}
                        </div>
                        <Hidden mdDown>
                        <div className={`departments categories ${classes.linksContainer}`}>
                            <NavDropdown
                                title='Regional'
                                className="department navDropdown"
                            >
                                <NavDropdown.Item
                                    onClick={() => {}}
                                    className="category"
                                >
                                    French
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    onClick={() => {}}
                                    className="category"
                                >
                                    Italian
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => {}}
                                    className="category"
                                >
                                    Irish
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title='Nature'
                                className="department navDropdown"
                            >
                                <NavDropdown.Item
                                    onClick={() => {}}
                                    className="category"
                                >
                                    Animal
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => {}}
                                >
                                    Flower
                                </NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown
                                title='Seasonal'
                                className="department navDropdown"
                            >
                                <NavDropdown.Item
                                    onClick={() => {}}
                                    className="category"
                                >
                                    Christmas
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => {}}
                                    className="category"
                                >
                                    Valentine's
                                </NavDropdown.Item>

                            </NavDropdown>
                        </div>
                        </Hidden>
                        <Hidden mdDown>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                name="search"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        </Hidden>
                        <Hidden mdDown>
                            <div className={classes.iconContainer} onClick={() => {this.props.showCart()}}>
                                <Badge classes={{
                                    badge: classes.badge
                                }}
                                    id="menuCartQuantity"
                                    badgeContent={2}
                                    color="primary">
                                    <img alt="Shopping Cart Icon" src="/assets/icons/shopping-cart-white.svg"/>
                                </Badge>
                            </div>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle.bind(this)}
                            >
                                <Menu />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                    <Hidden mdUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={"right"}
                            className="py-12"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle.bind(this)}
                        >
                        <Button classes={{
                                    root: classes.button
                                }}>
                                    <Link to={`/department/1`} className={classes.navDrawerLink} >
                                        Regional
                                    </Link>
                                </Button>
                        </Drawer>
                    </Hidden>
                </AppBar>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    brand: PropTypes.string.isRequired,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showCart: alertActions.showCart
    }, dispatch);
}

export default withStyles(styles, {withTheme: true})(connect(null, mapDispatchToProps)(NavBar));
