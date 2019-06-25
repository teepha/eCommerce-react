import React from "react";
import {withStyles, InputBase, Fab} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import EmailIcon from '@material-ui/icons/EmailOutlined';
import styles from './styles';

class SubscribeBar extends React.Component {

    render() {

        const {
            classes
        } = this.props;


        return (
            <div className={classes.subscribeBar}>

                    <div className={classes.toolbar}>
                        <div className={classes.mainText}>Subscribe for Shop News, Updates and Special Offers</div>
                        <div style={{flex: 1, flexGrow: 1}} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <EmailIcon/>
                            </div>
                            <InputBase
                                placeholder="Your Email"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <Fab color="primary" size="small" className={classes.subscribeButton}><span className={classes.subscribeText}>Subscribe</span></Fab>
                    </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}


export default withStyles(styles, {withTheme: true})(connect(null, mapDispatchToProps)(SubscribeBar));
