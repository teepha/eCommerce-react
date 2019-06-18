import EmailIcon from "@material-ui/core/SvgIcon/SvgIcon";
import React, {Component} from 'react';
import {Button, CircularProgress, withStyles, MenuItem} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {SelectFormsy, TextFieldFormsy} from '../../../../components/Formsy';
import Formsy from 'formsy-react';
import * as ordersActions from '../../../../store/actions/orders';
import cartService from '../../../../services/cartService';
import styles from './styles';

class OrderForm extends Component {

    state = {
        canSubmit: false
    };

    form = React.createRef();

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    componentDidMount() {
        this.props.getAllShipping();
    }

    async onSubmit(model) {
        let {token} = await this.props.stripe.createToken({name: "Name"});

        model['cart_id']  = cartService.getCartId();
        model['tax_id'] = 1;
        model['stripeToken'] = token.id;
        model['amount'] = this.props.total * 100;
        model['currency'] = 'GBP';
        this.props.addOrder(model);

    }

    render() {
        const {orderLoading, shippingRegions} = this.props;
        const {canSubmit} = this.state;

        return (
            <div className="w-full flex flex-row justify-center">
                {shippingRegions && shippingRegions.length ?
                    <div>
                        <Formsy
                            onValidSubmit={this.onSubmit.bind(this)}
                            onValid={this.enableButton.bind(this)}
                            onInvalid={this.disableButton.bind(this)}
                            ref={(form) => this.form = form}
                            className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
                        >
                            <TextFieldFormsy
                                className="w-full mb-4"
                                type="text"
                                rows={4}
                                name="description"
                                label="Order Description"
                                variant="outlined"
                                required
                            />

                            <SelectFormsy
                                name="shipping_id"
                                className="w-full mb-10"
                                label="Shipping Region"
                                value={shippingRegions[0].shipping_region_id}
                            >
                                { shippingRegions.map((item, index) => {
                                    return (<MenuItem key={index} value={item.shipping_region_id}>{item.shipping_region}</MenuItem>)
                                })}
                            </SelectFormsy>


                            <CardElement />


                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="w-full mx-auto mt-16 normal-case"
                                aria-label="Confirm Order"
                                disabled={!canSubmit}
                                value="legacy"
                            >
                                {orderLoading ? <CircularProgress size={20} color="secondary" style={{margin: 4}}/> : 'Confirm Order'}
                            </Button>

                        </Formsy>
                    </div> : <CircularProgress color={"primary"} size={24} />}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addOrder: ordersActions.addOrder,
        getAllShipping: ordersActions.getAllShipping
    }, dispatch);
}

function mapStateToProps({orders}) {
    return {
        orderLoading: orders.add.isLoading,
        cardPayLoading: orders.add.isLoading,
        order: orders.add.data,
        shippingRegions: orders.shipping.data,
    }
}

export default withStyles(styles)(injectStripe(connect(mapStateToProps, mapDispatchToProps)(OrderForm)));
