import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './styles';

class Container extends Component {

    render()
    {
        const {children} = this.props;

        return (
            <div className="py-6">
                {children}
            </div>
        );
    }
}

Container.defaultProps = {
    flex: false
};

export default withStyles(styles)(Container);
