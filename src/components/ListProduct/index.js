import React, {Component} from 'react';
import systemConfig from "../../config/system";
import {Fab} from "@material-ui/core";
import {withStyles} from '@material-ui/core';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import styles from './styles';
import './styles.css';

class ListProduct extends Component {

    render() {
        const {classes, product} = this.props;
        const isDiscounted = parseFloat(product.discounted_price) > 0;

        return (
            <div className="max-w-sm overflow-hidden w-11/12 justify-center relative product-card">

                <div className="product-info-block">

                  {parseFloat(product.discounted_price) > 0 &&
                  <div className={classes.wasBlockContainer}>
                      <span className={classes.wasBlock}>SALE</span>
                  </div>}

                  <img className="w-full" src={systemConfig.imageBaseUrl + product.thumbnail} alt="Product"/>

                  <div className="productTextDiv">

                    <div>
                       <span className={`product-card-title ${classes.productTitle}`}>
                            {product.name}
                        </span>
                    </div>

                    <div>
                         <span className={classes.productPrice}>
                            <span className={classNames({
                                [classes.strikeThrough]: isDiscounted
                            })}>£ {product.price}</span>{ isDiscounted && <span> | £ {product.discounted_price}</span>}
                            </span>
                    </div>

                  </div>

                </div>

                <Link to={`/product/${product.product_id}`}>
                    <div className={`product-card-link ${classes.addButtonContainer}`}>
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
