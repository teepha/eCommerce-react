import React, {Component} from 'react';
import {
    Paper,
    Dialog,
    DialogContent,
    withStyles,
    CircularProgress,
    Fab
} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Cart from './Cart'
import * as Actions from '../../../store/actions/alerts';
import OrderForm from "./Forms/OrderForm";
import systemConfig from '../../../config/system';
import * as ordersActions from '../../../store/actions/orders';
import styles from './styles';

function PaperComponent(props) {
    return (
        <Paper {...props} style={{width: "820px", height: "600px"}}/>
    );
}

class CartDialog extends Component {

    state = {
        open: false,
        activeStep: 0,
        completed: false
    };

    componentDidMount() {
        this.props.getAllShipping();
    }

    handleClose = () => {
        this.props.hideCart();
    };


    handleNext() {
        if (this.props.user.customer) {
            this.setState({
                activeStep: this.state.activeStep + 1
            })
        } else {
            alert('Please Sign In to complete order.');
            this.props.showAuth(false);
        }

    }

    handlePrevious() {
        if (this.state.activeStep > 0) {
            this.setState({
                activeStep: this.state.activeStep - 1
            })
        }
    }

    render() {
        const {classes, cartItems} = this.props;
        const {activeStep} = this.state;
        const loadingNext = false;

        let total = 0;

        cartItems.forEach((item) => {
            total += item.price * item.quantity
        });

        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose.bind(this)}
                    PaperComponent={PaperComponent}
                    maxWidth="lg"
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogContent style={{overflow: 'hidden'}}>
                        <div className="flex mb-4 h-8">
                            <div className="w-1/2">
                                <span className={classes.titleText}>{cartItems.length} items in Your Cart</span>
                            </div>
                            <div className="w-1/4 flex justify-start">
                                <span className={classes.totalText} onClick={this.handleClose.bind(this)}>Total: £ { total.toFixed(2) }</span>
                            </div>
                            <div className="w-1/4 flex justify-end">
                                <span className={classes.closeButton} onClick={this.handleClose.bind(this)}>X</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-grow flex-col" style={{height: "450px"}}>
                            { activeStep === 0 ? <Cart/> :
                                <StripeProvider apiKey={systemConfig.stripeToken}>
                                    <Elements>
                                        <OrderForm total={total} />
                                    </Elements>
                                </StripeProvider>}
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2">
                                <Fab color="primary"
                                     disabled={activeStep === 0}
                                     onClick={this.handlePrevious.bind(this)}
                                     style={{borderRadius: 48, height: 48, width: 160}}>
                                    <span
                                        className={classes.submitButtonText}>{activeStep === 0 ? 'Back to Shop' : 'Back'}</span></Fab>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <Fab color="primary"
                                     disabled={loadingNext}
                                     onClick={this.handleNext.bind(this)}
                                     style={{borderRadius: 48, height: 48, width: 160}}>
                                    <span className={classes.submitButtonText}>Next</span></Fab>
                                {loadingNext &&
                                <CircularProgress color="primary" className={classes.buttonProgress} size={24}/>}
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
        getAllShipping: ordersActions.getAllShipping
    }, dispatch);
}

function mapStateToProps({alerts, cart, auth}) {
    return {
        open: alerts.cart.open,
        cartItems: cart.items.data,
        user: auth.user
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CartDialog));
