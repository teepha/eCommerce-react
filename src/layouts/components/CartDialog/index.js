import React, {Component} from 'react';
import {
    Paper,
    Dialog,
    DialogContent,
    withStyles,
    Fab
} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Cart from './Cart'
import * as Actions from '../../../store/actions/alerts';
import OrderForm from "./Forms/OrderForm";
import styles from './styles';

function PaperComponent(props) {
    return (
        <Paper {...props} style={{width: "820px"}}/>
    );
}

class CartDialog extends Component {

    state = {
        open: false,
        activeStep: 0,
        completed: false
    };

    handleClose = () => {
        this.props.hideCart();
    };


    handleNext() {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    handlePrevious() {
        if (this.state.activeStep > 0) {
            this.setState({
                activeStep: this.state.activeStep - 1
            })
        }
    }

    render() {
        const {classes} = this.props;
        const {activeStep} = this.state;


        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose.bind(this)}
                    PaperComponent={PaperComponent}
                    maxWidth="lg"
                    scroll="paper"
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogContent style={{overflow: 'hidden'}}>
                        <div className="flex mb-4 h-8">
                            <div className="w-1/2">
                                <span className={classes.titleText}>1 items in Your Cart</span>
                            </div>
                            <div className="w-1/4 flex justify-start">
                                <span className={classes.totalText} onClick={this.handleClose.bind(this)} id="cartTotalPriceValue">Total: £ 14.99</span>
                            </div>
                            <div className="w-1/4 flex justify-end">
                                <span className={classes.closeButton} onClick={this.handleClose.bind(this)}>X</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-grow flex-col" style={{height: "450px"}}>
                            { activeStep === 0 ? <Cart/> : <OrderForm />}
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2">
                                <Fab color="primary"
                                     onClick={activeStep === 0 ? this.handleClose.bind(this) : this.handlePrevious.bind(this)}
                                     style={{borderRadius: 48, height: 48, width: 160}}>
                                    <span
                                        className={classes.submitButtonText}>{activeStep === 0 ? 'Back to Shop' : 'Back'}</span></Fab>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <Fab color="primary"
                                     onClick={this.handleNext.bind(this)}
                                     style={{borderRadius: 48, height: 48, width: 160}}>
                                    { activeStep === 0 ? 
                                    <span className={classes.submitButtonText} id="btnCheckout">Checkout</span>
                                    : <span className={classes.submitButtonText} id="btnNext">Next</span>}
                                    </Fab>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideCart: Actions.hideCart,
        showAuth: Actions.showAuth,
    }, dispatch);
}

function mapStateToProps({alerts, cart, auth}) {
    return {
        open: alerts.cart.open,
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CartDialog));
