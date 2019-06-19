import React, {Component} from 'react';
import {Button, withStyles, MenuItem} from '@material-ui/core';
import StripeCheckout from 'react-stripe-checkout';
import {SelectFormsy, TextFieldFormsy} from '../../../../components/Formsy';
import Formsy from 'formsy-react';
import styles from './styles';

class OrderForm extends Component {

    form = React.createRef();

    render() {

        return (
            <div id="delivery" className="w-full flex flex-row justify-center">
                    <div className="w-full">
                        <Formsy
                            ref={(form) => this.form = form}
                            className="bg-white shadow-md rounded px-4 pt-4 mt-4 pb-6 mb-2"
                        >
                            <div className="flex flex-row justify-between">
                                <TextFieldFormsy
                                    className="w-5/12 mb-4"
                                    type="text"
                                    rows={4}
                                    name="first-name"
                                    label="First Name"
                                    variant="outlined"
                                    required
                                />
                                <TextFieldFormsy
                                    className="w-5/12 mb-4"
                                    type="text"
                                    rows={4}
                                    name="last-name"
                                    label="Last Name"
                                    variant="outlined"
                                    required
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <TextFieldFormsy
                                    className="w-5/12 mb-4"
                                    type="text"
                                    rows={4}
                                    name="address"
                                    label="Address"
                                    variant="outlined"
                                    required
                                />
                                <TextFieldFormsy
                                    className="w-5/12 mb-4"
                                    type="text"
                                    rows={4}
                                    name="city"
                                    label="City"
                                    variant="outlined"
                                    required
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <TextFieldFormsy
                                    className="w-5/12  mb-4"
                                    type="text"
                                    rows={4}
                                    name="state"
                                    label="State"
                                    variant="outlined"
                                    required
                                />
                                <TextFieldFormsy
                                    className="w-5/12  mb-4"
                                    type="text"
                                    rows={4}
                                    name="country"
                                    label="Country"
                                    variant="outlined"
                                    required
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <TextFieldFormsy
                                    className="w-5/12 mb-2"
                                    type="text"
                                    rows={4}
                                    name="zip"
                                    label="Zip Code"
                                    variant="outlined"
                                    required
                                />

                                <SelectFormsy
                                    name="shipping_id"
                                    className="w-5/12 mb-2"
                                    label="Shipping Region"
                                    id="region"
                                    value={1}
                                >
                                    <MenuItem value="Select shipping region" className="region-option">Select shipping region</MenuItem>
                                </SelectFormsy>
                            </div>
                            <SelectFormsy
                                    name="shipping_id"
                                    className="w-5/12 mb-1 flex justify-center"
                                    label="Shipping Type"
                                    id="type"
                                    value={1}
                                >
                                    <MenuItem value="Select shipping type" className="type-option">Select shipping Type</MenuItem>
                                </SelectFormsy>
                            <StripeCheckout
                                name="Tshirt Shop"
                                description="Payment description"
                                amount={1000}
                                token={token => console.log(token)}
                                stripeKey=""
                                id="stripe-popup"
                            >


                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="w-6/12 mx-auto mt-4 normal-case flex justify-center"
                                aria-label="Make Payment"
                                id="make-payment"
                                value="legacy"
                            >
                                 Make Payment
                            </Button>
                            </StripeCheckout>

                        </Formsy>
                    </div>
            </div>
        );
    }
}


export default withStyles(styles)(OrderForm);
