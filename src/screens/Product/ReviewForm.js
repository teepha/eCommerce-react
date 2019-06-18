import React, {Component} from 'react';
import {Button, CircularProgress, withStyles} from '@material-ui/core';
import StarRatings from "react-star-ratings";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {TextFieldFormsy} from '../../components/Formsy';
import Formsy from 'formsy-react';
import * as productActions from '../../store/actions/product';
import styles from './styles';

class RegisterForm extends Component {

    state = {
        canSubmit: false,
        rating: 0
    };

    form = React.createRef();

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        model['product_id'] = this.props.productId;
        model['rating'] = this.state.rating;

        this.props.addProductReview(model);
    };

    changeRating(rating) {
        this.setState({
            rating
        })
    }

    render() {
        const {reviewLoading} = this.props;
        const {canSubmit} = this.state;

        return (
            <div className="w-full flex flex-row justify-center">
                <Formsy
                    onValidSubmit={this.onSubmit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    ref={(form) => this.form = form}
                    className="px-8 pt-6 mt-6 pb-8 mb-4"
                >
                    <div className="w-full py-4 mb-4">
                        <StarRatings
                            rating={this.state.rating}
                            changeRating={this.changeRating.bind(this)}
                            starRatedColor="#ffc94f"
                            starEmptyColor="#797979"
                            starHoverColor="#ffc94f"

                            starDimension="20px"
                            starSpacing="1px"
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>

                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="text"
                        name="review"
                        label="Your Review"
                        validations={{
                            minLength: 4
                        }}
                        validationErrors={{
                            minLength: 'Min character length is 4'
                        }}
                        variant="outlined"
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full mx-auto mt-16 normal-case"
                        aria-label="LOG IN"
                        disabled={!canSubmit}
                        value="legacy"
                    >
                        {reviewLoading ?
                            <CircularProgress size={20} color="secondary" style={{margin: 4}}/> : 'Add Review'}
                    </Button>

                </Formsy>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addProductReview: productActions.addProductReview,
        getProductDetails: productActions.getProductDetails,
    }, dispatch);
}

function mapStateToProps({product}) {
    return {
        reviewLoading: product.addReview.isLoading,
        addReview: product.addReview.data
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
