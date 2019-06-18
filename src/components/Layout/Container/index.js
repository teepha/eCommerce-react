import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './styles';

class Container extends Component {

    render()
    {
        const {children} = this.props;

        return (
            <div className="container mx-auto">
                {children}
            </div>
        );
    }
}

Container.defaultProps = {
    desktopOnly: false
};

export default withStyles(styles)(Container);
