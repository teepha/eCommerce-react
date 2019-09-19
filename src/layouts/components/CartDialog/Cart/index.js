/**
 * Implement functionality for Cart
 */
import { Fab, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SubtractIcon from "@material-ui/icons/Remove";
import React, { Component } from "react";
import { connect } from "react-redux";
import systemConfig from "../../../../config/system";
import styles from "./styles";

class Cart extends Component {
  render() {
    const { classes, shoppingCartItems } = this.props;

    return (
      <div id="cart">
        <div className={`flex mb-4 h-8 ${classes.headerBorderBottom}`}>
          <div className="w-3/6">
            <span className={classes.headerTitle}>Item</span>
          </div>
          <div className="w-1/12">
            <span className={classes.headerTitle}>Color</span>
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
        {shoppingCartItems &&
          shoppingCartItems.map((item, index) => (
            <div className="flex mb-4" key={index}>
              <div className="w-2/12">
                <img
                  className="w-full"
                  src={`${systemConfig.imageBaseUrl}${item.image}`}
                  alt="Product"
                />
              </div>
              <div className="w-4/12 pl-6 cart-item">
                <div className="w-full">
                  <span className={`cart-item-title ${classes.nameText}`}>
                    {item.name}
                  </span>
                </div>
                <div className="w-full pt-2">
                  <span className={classes.productCodeText}>{item.item_id}</span>
                </div>
                <div
                  className="w-full pt-2 cart-item-remove"
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <span className={classes.removeIcon}>X</span>
                    <span className={classes.removeText}> Remove</span>
                  </span>
                </div>
              </div>
              <div className="w-1/12 ">
                <span className={`cart-item-color ${classes.sizeText}`}>
                  {(item.attributes.split(","))[1]}
                </span>
              </div>
              <div className="w-1/12 ">
                      <span className={`cart-item-size ${classes.sizeText}`}>{(item.attributes.split(","))[0]}</span>
              </div>
              <div className="w-3/12 h-8">
                <div className="flex flex-row">
                  <Fab
                    size="small"
                    aria-label="Subtract"
                    className={classes.addRemoveIcon}
                  >
                    <SubtractIcon
                      onClick={() => {
                        if (item.quantity > 1) {
                          item.quantity = item.quantity - 1;
                        }
                      }}
                    />
                  </Fab>

                  <div className="shadow appearance-none border rounded w-16 text-gray-700 rounded-full text-center mx-2">
                    <span
                      className={classes.addRemoveText}
                      name="cart-item-quantity"
                    >
                      {item.quantity}
                    </span>
                  </div>

                  <Fab
                    size="small"
                    aria-label="Add"
                    className={`increase-cart-quantity ${classes.addRemoveIcon}`}
                  >
                    <AddIcon
                      onClick={() => {
                        if (item.quantity >= 1) {
                          item.quantity += 1;
                        }
                      }}
                    />
                  </Fab>
                </div>
              </div>
              <div className="w-2/12">
                <span className={`cart-item-price ${classes.priceText}`}>
                  £ <span>{item.subtotal}</span>
                </span>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps({ shoppingCart }) {
  return {
    shoppingCartItems: shoppingCart.getCart.data
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    null
  )(Cart)
);
