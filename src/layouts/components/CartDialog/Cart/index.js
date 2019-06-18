import {CircularProgress, Fab, withStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SubtractIcon from '@material-ui/icons/Remove';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import systemConfig from "../../../../config/system";
import * as Actions from '../../../../store/actions/alerts/toast.actions';
import * as cartActions from "../../../../store/actions/cart";
import styles from './styles';

class Cart extends Component {

    addSubtractAmount(action, itemId, quantity) {
        if (action === 'add') {
            this.props.updateCartItem({cartItemId: itemId, quantity: quantity + 1})
        } else if (quantity > 1) {
            this.props.updateCartItem({cartItemId: itemId, quantity: quantity - 1})
        }
    }

    render() {
        const {classes, cartItems, removeFromCart, removeLoading, updateLoading} = this.props;
        return (
            <div>
                <div className={`flex mb-4 h-8 ${classes.headerBorderBottom}`}>
                    <div className="w-3/6">
                        <span className={classes.headerTitle}>Item</span>
                    </div>
                    <div className="w-1/12">
                        <span className={classes.headerTitle}>Size</span>
                    </div>
                    <div className="w-3/12">
                        <span className={classes.headerTitle}>Quantity</span>
                    </div>
                    <div className="w-2/12">
                        <span className={classes.headerTitle}>Price</span>
                    </div>
                </div>
                {
                    cartItems && cartItems.map((item, index) => {
                        return (
                            <div key={index} className="flex mb-4">
                                <div className="w-2/12">
                                    <img className="w-full" src={systemConfig.imageBaseUrl + item.image}
                                         alt="Product Image"/>
                                </div>
                                <div className="w-4/12 pl-6">
                                    <div className="w-full">
                                        <span className={classes.nameText}>{item.name}</span>
                                    </div>
                                    <div className="w-full pt-2">
                                        <span className={classes.productCodeText}>Men BK35679</span>
                                    </div>
                                    <div className="w-full pt-2" style={{cursor: "pointer"}} onClick={() => {
                                        removeFromCart({itemId: item.item_id})
                                    }}>
                                        {removeLoading ? <CircularProgress size={20} color="primary"/> :
                                            <span><span className={classes.removeIcon}>X</span><span
                                                className={classes.removeText}> Remove</span></span>}

                                    </div>
                                </div>
                                <div className="w-1/12 ">
                                    <span className={classes.sizeText}>XL</span>
                                </div>
                                <div className="w-3/12 h-8">
                                    {updateLoading ? <CircularProgress size={20} color="primary"/> :
                                        <div className="flex flex-row">
                                            <Fab size="small" aria-label="Subtract" className={classes.addRemoveIcon}
                                                 onClick={this.addSubtractAmount.bind(this, 'subtract', item.item_id, item.quantity)}>
                                                <SubtractIcon/>
                                            </Fab>

                                            <div
                                                className="shadow appearance-none border rounded w-16 text-gray-700 rounded-full text-center mx-2">
                                                <span
                                                    className={classes.addRemoveText}>{item.quantity}</span>
                                            </div>

                                            <Fab size="small" aria-label="Add" className={classes.addRemoveIcon}
                                                 onClick={this.addSubtractAmount.bind(this, 'add', item.item_id, item.quantity)}>
                                                <AddIcon/>
                                            </Fab>
                                        </div>
                                    }
                                </div>
                                <div className="w-2/12">
                                    <span className={classes.priceText}>£ {item.price}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideToast: Actions.hideToast,
        removeFromCart: cartActions.removeFromCart,
        updateCartItem: cartActions.updateCartItem
    }, dispatch);
}

function mapStateToProps({cart}) {
    return {
        cartItems: cart.items.data,
        removeLoading: cart.removeItem.isLoading,
        updateLoading: cart.updateItem.isLoading
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Cart));
