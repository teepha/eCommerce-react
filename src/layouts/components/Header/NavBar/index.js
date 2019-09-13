import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  InputBase,
  Badge,
  Drawer,
  Hidden,
  IconButton,
  Button,
  Toolbar,
  AppBar
} from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "@material-ui/icons/Menu";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles";
import * as alertActions from "../../../../store/actions/alerts";
import * as departmentActions from "../../../../store/actions/departments";
import * as categoriesActions from "../../../../store/actions/categories";
import * as productActions from "../../../../store/actions/products";
import "./style.css";

class NavBar extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  componentDidMount() {
    window.addEventListener("scroll", event => {
      const scrollpos = window.scrollY;
      if (scrollpos > 10) {
        this.setState({
          activeClass: "is-scrolled"
        });
      } else {
        this.setState({
          activeClass: "is-ontop"
        });
      }
    });
    this.props.getAllDepartments();
  }

  handleToggleDepartment = e => {
    e.preventDefault();
    const departmentId = parseInt(e.target.id);
    this.props.getProductsInDepartment({ department_id: departmentId, page: 1})
    this.props.getDepartmentCategories({ department_id: departmentId });
  };

  render() {
    const { classes, brand, allDepartments } = this.props;

    const brandComponent = (
      <Link to={"/"} className={classes.brand}>
        {brand}
      </Link>
    );

    return (
      <div>
        <AppBar
          className={`mainHeaderHolder ${classes.navBar +
            " " +
            this.state.activeClass}`}
        >
          <Toolbar className={classes.toolbar}>
            <div className={classes.flex}>{brandComponent}</div>
            <Hidden mdDown>
              <div
                className={`departments categories ${classes.linksContainer}`}
              >
                {allDepartments.map((department, index) => (
                  <NavDropdown
                    key={index}
                    id={department.department_id}
                    title={department.name}
                    onClick={this.handleToggleDepartment}
                    className="department navDropdown"
                  ></NavDropdown>
                ))}
              </div>
            </Hidden>
            <Hidden mdDown>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  name="search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            </Hidden>
            <Hidden mdDown>
              <div
                className={classes.iconContainer}
                onClick={() => {
                  this.props.showCart();
                }}
              >
                <Badge
                  classes={{
                    badge: classes.badge
                  }}
                  id="menuCartQuantity"
                  badgeContent={2}
                  color="primary"
                >
                  <img
                    alt="Shopping Cart Icon"
                    src="/assets/icons/shopping-cart-white.svg"
                  />
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
              <Button
                classes={{
                  root: classes.button
                }}
              >
                <Link to={`/department/1`} className={classes.navDrawerLink}>
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
  return bindActionCreators(
    {
      showCart: alertActions.showCart,
      getAllDepartments: departmentActions.getAllDepartments,
      getDepartmentCategories: categoriesActions.getDepartmentCategories,
      getProductsInDepartment: productActions.getProductsInDepartment,
      getProductsInCategory: productActions.getProductsInCategory
    },
    dispatch
  );
}

const mapStateToProps = ({ products, departments, categories }) => {
  return {
    allDepartments: departments.all.data,
    departmentCategories: categories.departmentCategories.data,
    departmentProducts: products.departmentProducts.data.rows,
    categoryProducts: products.categoryProducts.data.rows
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
