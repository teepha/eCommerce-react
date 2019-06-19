import React from "react";
import {Hidden, withStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import {Container} from "../../../components/Layout";
import styles from './styles';

class Footer extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Container desktopOnly={true}>
                    <Hidden smDown>
                        <div className={classes.linksContainer}>
                                <Button classes={{
                                        root: classes.button
                                    }}>
                                        <Link to={`/`} className={classes.footerLink}>
                                            Regional
                                        </Link>
                                    </Button>
                                    <Button classes={{
                                        root: classes.button
                                    }}>
                                        <Link to={`/`} className={classes.footerLink}>
                                            Nature
                                        </Link>
                                    </Button>
                                    <Button classes={{
                                        root: classes.button
                                    }}>
                                        <Link to={`/`} className={classes.footerLink}>
                                            Seasonal
                                        </Link>
                                    </Button>
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


export default withStyles(styles, {withTheme: true})(Footer);
