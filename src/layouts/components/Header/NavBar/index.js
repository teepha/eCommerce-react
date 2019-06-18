import React from "react";
import PropTypes from "prop-types";
import {withStyles, CircularProgress, InputBase, Badge, Drawer, Hidden, IconButton, Button, Toolbar, AppBar} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/icons/Menu';
import { Link }  from 'react-router-dom';
import styles from './styles';
import * as productActions from "../../../../store/actions/products";
import * as categoryActions from "../../../../store/actions/categories";
import * as cartActions from "../../../../store/actions/cart";
import * as departmentsActions from "../../../../store/actions/departments";
import * as alertActions from "../../../../store/actions/alerts";

class NavBar extends React.Component {

    state = {
        mobileOpen: false
    };

    componentWillMount() {
        this.props.getAllDepartments();
        this.props.getCartItems();
    }

    handleSearch(event) {
        this.props.searchProducts({
            query_string: event.target.value,
            all_words: 'on',
            page: 1,
            limit: 9,
            description_length: 120
        });
    }

    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }

    render() {

        const {
            classes,
            brand
        } = this.props;

        const {departments, cartItems} = this.props;

        const brandComponent = <Link to={'/'} style={{textDecoration: 'none'}}><Button className={classes.brand}>{brand}</Button></Link>;

        return (
            <div>
                <AppBar className={classes.navBar}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.flex}>
                            {brandComponent}
                        </div>
                        <Hidden mdDown>
                        <div className={classes.linksContainer}>
                            {
                                departments.length > 0 ? departments.map((item) => {
                                    return (<Button key={item.department_id} classes={{
                                        root: classes.button
                                    }}>
                                        <Link key={item.department_id} to={`/department/${item.department_id}`} className={classes.navLink}>
                                            {item.name}
                                        </Link>
                                    </Button>)
                                }) : <CircularProgress size={20} color="inherit"/>
                            }
                        </div>
                        </Hidden>
                        <Hidden mdDown>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                onChange={this.handleSearch.bind(this)}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        </Hidden>
                        <Hidden mdDown>
                            <div className={classes.iconContainer} onClick={() => {this.props.showCart()}}>
                                {cartItems.length > 0 ? <Badge classes={{
                                    badge: classes.badge
                                }}
                                                               badgeContent={cartItems.length}
                                                               color="primary">
                                    <img alt="Shopping Cart Icon" src="/assets/icons/shopping-cart-white.svg"/>
                                </Badge>: <img alt="Shopping Cart Icon" src="/assets/icons/shopping-cart-white.svg"/>}
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
                            {
                                departments.length > 0 ? departments.map((item) => {
                                    return (<Button key={item.department_id} classes={{
                                        root: classes.button
                                    }}>
                                        <Link key={item.category_id} to={`/department/${item.department_id}`} className={classes.navDrawerLink} >
                                            {item.name}
                                        </Link>
                                    </Button>)
                                }) : <CircularProgress size={20} color="inherit"/>
                            }
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
        getAllCategories: categoryActions.getAllCategories,
        getAllDepartments: departmentsActions.getAllDepartments,
        searchProducts: productActions.searchProducts,
        getCartItems: cartActions.getCartItems,
        showCart: alertActions.showCart
    }, dispatch);
}

function mapStateToProps({categories, cart, departments}) {
    return {
        departments: departments.all.data,
        categories: categories.all.data,
        cartItems: cart.items.data
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(NavBar));
