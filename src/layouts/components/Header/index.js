import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

class Header extends React.Component {

    render() {

        const {
            classes,
            brand,
            categories
        } = this.props;

        return (
            <div>
                <TopBar />
                <NavBar classes={classes} brand={brand} categories={categories} />
            </div>
        );
    }
}

Header.defaultProps = {
    categories: {
        rows: []
    }
};

Header.propTypes = {
    classes: PropTypes.object,
    brand: PropTypes.string
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

function mapStateToProps({categories}) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
