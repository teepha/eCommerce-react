import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as departmentActions from "../../../store/actions/departments";
import {CircularProgress, Hidden, withStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import {Container} from "../../../components/Layout";
import styles from './styles';

class Footer extends React.Component {

    componentWillMount() {
        this.props.getAllDepartments()
    }

    render() {

        const {classes, departments} = this.props;

        return (
            <div className={classes.root}>
                <Container desktopOnly={true}>
                    <Hidden smDown>
                        <div className={classes.linksContainer}>
                            {
                                departments.length > 0 ? departments.map((item) => {
                                    return (<Button key={item.department_id} classes={{
                                        root: classes.button
                                    }}>
                                        <Link key={item.department_id} to={`/department/${item.department_id}`} className={classes.footerLink}>
                                            {item.name}
                                        </Link>
                                    </Button>)
                                }) : <CircularProgress size={20} color="inherit"/>
                            }
                        </div>
                    </Hidden>
                    <div className={classes.socialContainer}>
                        <img className={classes.socialIcon} alt="Shopping Cart Icon"
                             src="/assets/icons/instagram/grey.svg"/>
                        <img className={classes.socialIcon} alt="Shopping Cart Icon"
                             src="/assets/icons/pinterest/grey.svg"/>
                        <img className={classes.socialIcon} alt="Shopping Cart Icon"
                             src="/assets/icons/twitter/grey.svg"/>
                        <img className={classes.socialIcon} alt="Shopping Cart Icon"
                             src="/assets/icons/facebook/grey.svg"/>
                    </div>
                </Container>
            </div>
        );
    }
}

Footer.defaultProps = {
    categories: {
        rows: []
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllDepartments: departmentActions.getAllDepartments
    }, dispatch);
}

function mapStateToProps({departments}) {
    return {
        departments: departments.all.data
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(Footer));
