import React, {Component} from 'react';
import systemConfig from "../../config/system";
import {Fab, Paper} from "@material-ui/core";
import {withStyles} from '@material-ui/core';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import styles from './styles';

class ListProduct extends Component {

    render() {
        const {classes, product} = this.props;
        const isDiscounted = parseFloat(product.discounted_price) > 0;

        return (
            <div className="max-w-sm overflow-hidden shadow-lg bg-white w-11/12 justify-center relative">

                {parseFloat(product.discounted_price) > 0 &&
                <div className={classes.wasBlockContainer}>
                    <span className={classes.wasBlock}>SALE</span>
                </div>}

                <img className="w-full" src={systemConfig.imageBaseUrl + product.thumbnail} alt="Product Image"/>

                <div className="py-2 text-center">
                   <span className={classes.productTitle}>
                        {product.name}
                    </span>
                </div>

                <div className="py-2 text-center">
                     <span className={classes.productPrice}>
                        <span className={classNames({
                            [classes.strikeThrough]: isDiscounted
                        })}>£ {product.price}</span>{ isDiscounted && <span> | £ {product.discounted_price}</span>}
                </span>
                </div>

                <Link to={`/product/${product.product_id}`}>
                    <div className={classes.addButtonContainer}>
                        <Fab color="primary" size="small" className={classes.addButton}>
                            <span className={classes.addButtonText}>View</span>
                        </Fab>
                    </div>
                </Link>
            </div>
        );
    }
}


export default withStyles(styles)(ListProduct);

