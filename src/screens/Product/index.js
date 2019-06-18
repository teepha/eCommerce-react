import React, {Component} from 'react'
import {
    withStyles,
    Radio,
    Checkbox,
    Fab, CircularProgress, Hidden, Link
} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import AddIcon from '@material-ui/icons/Add';
import SubtractIcon from '@material-ui/icons/Remove';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import StarRatings from 'react-star-ratings';
import classNames from "classnames";
import {Carousel} from 'react-responsive-carousel';
import systemConfig from '../../config/system';
import * as productActions from '../../store/actions/product';
import * as cartActions from '../../store/actions/cart';
import * as alertActions from '../../store/actions/alerts';
import styles from './styles';
import {Container, Section} from '../../components/Layout';
import Review from '../../components/Review';
import ReviewForm from './ReviewForm';

const initialState = {
    color: 'blue',
    XS: false,
    S: false,
    M: true,
    L: false,
    XL: false,
    min: 100,
    max: 375,
    amount: 1,
    rating: 0
};

class Product extends Component {

    state = initialState;

    handleRadioChange(event) {
        this.setState({
            color: event.target.value
        });
    }

    addSubtractAmount(action) {
        if (action === 'add') {
            this.setState({
                amount: this.state.amount + 1
            })
        } else if (this.state.amount > 1) {
            this.setState({
                amount: this.state.amount - 1
            })
        }
    }

    handleSizeChange = name => event => {
        this.setState({...this.state, [name]: event.target.checked});
    };

    componentWillMount() {
        const {match: {params}} = this.props;
        this.props.getSingleProduct({
            product_id: params.id
        });
        this.props.getProductDetails({
            product_id: params.id
        });
        this.props.getProductLocations({
            product_id: params.id
        });
        this.props.getProductReviews({
            product_id: params.id
        });
    }

    onRatingChange(rating) {
        this.setState({
            rating
        });
    }

    handleAddToCart () {
        const {match: {params}} = this.props;
        const { color, XS, S, M, L, XL, amount } = this.state;
        const attributes = {
            color: color,
            sizes: { XS, S, M, L, XL }
        };

        this.props.addToCart({
            product_id: params.id,
            attributes: JSON.stringify(attributes),
            amount
        });
    }

    render() {
        const {classes, product, loading, locations, locationsLoading, reviewsLoading, reviews, addToCartLoading, match: {params}} = this.props;

        const isLoading = loading || !product.image || locationsLoading || reviewsLoading;
        const isDiscounted = parseFloat(product.discounted_price) > 0;

        return (
            <div className={classes.root}>
                <Container>
                    {isLoading ? <Section>
                            <div className="flex flex-wrap shadow flex justify-center py-24 bg-white">
                                <CircularProgress size={40} color="primary"/>
                            </div>
                        </Section> :
                        <div>
                            <Section>
                                <div className="flex flex-wrap shadow bg-white">
                                    <div
                                        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center align-middle pt-10">
                                        <Carousel showArrows={true} showIndicators={false} showStatus={false}>
                                            <div className={classes.carouselImageContainer}>
                                                <img src={`${systemConfig.imageBaseUrl}${product.image}`}/>
                                            </div>
                                            <div className={classes.carouselImageContainer}>
                                                <img src={`${systemConfig.imageBaseUrl}${product.image_2}`}/>
                                            </div>
                                        </Carousel>
                                    </div>
                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-10">
                                        <div className={`w-full h-8 ${classes.breadcrumbsText}`}>
                                            Home <span className="ml-4"/> • <span
                                            className="ml-4"/> {locations[0].department_name} <span
                                            className="ml-4"/> • <span className="ml-4"/> {locations[0].category_name}
                                        </div>
                                        <div className="w-full h-8 mt-2">
                                            <StarRatings
                                                rating={_.meanBy(reviews, (p) => p.rating)}
                                                starRatedColor="#ffc94f"
                                                starEmptyColor="#eeeeee"
                                                starHoverColor="#ffc94f"
                                                starDimension="20px"
                                                starSpacing="1px"
                                                numberOfStars={5}
                                                name='rating'
                                            />
                                        </div>
                                        <div className="w-full h-8">
                                    <span className={classes.productTitleText}>
                                        {product.name}
                                    </span>
                                        </div>
                                        <div className="w-full mt-4">
                                     <span className={classes.productPrice}>
                                        <span className={classNames({
                                            [classes.strikeThrough]: isDiscounted
                                        })}>£ {product.price}</span>{isDiscounted &&
                                     <span> | £ {product.discounted_price}</span>}
                                </span>
                                        </div>
                                        <div className="w-full my-8">
                                            <div className="w-full mb-2">
                                                <span className={classes.lightTitle}> Colour </span>
                                            </div>
                                            <div>
                                                <Radio
                                                    style={{padding: 2, color: '#6eb2fb'}}
                                                    checked={this.state.color === 'blue'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="blue"
                                                    name="radio-button-demo"
                                                    aria-label="blue"
                                                />
                                                <Radio
                                                    style={{padding: 2, color: '#00d3ca'}}
                                                    checked={this.state.color === 'cyan'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="cyan"
                                                    name="radio-button-demo"
                                                    aria-label="cyan"
                                                />
                                                <Radio
                                                    style={{padding: 2, color: '#f62f5e'}}
                                                    checked={this.state.color === 'red'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="red"
                                                    name="radio-button-demo"
                                                    aria-label="red"
                                                />
                                                <Radio
                                                    style={{padding: 2, color: '#fe5c07'}}
                                                    checked={this.state.color === 'orange'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="orange"
                                                    name="radio-button-demo"
                                                    aria-label="orange"
                                                />
                                                <Radio
                                                    style={{padding: 2, color: '#f8e71c'}}
                                                    checked={this.state.color === 'yellow'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="yellow"
                                                    name="radio-button-demo"
                                                    aria-label="yellow"
                                                />
                                                <Radio
                                                    style={{padding: 2, color: '#7ed321'}}
                                                    checked={this.state.color === 'green'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="green"
                                                    name="radio-button-demo"
                                                    aria-label="green"
                                                />
                                                <Radio
                                                    style={{padding: 2, color: '#9013fe'}}
                                                    checked={this.state.color === 'purple'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="purple"
                                                    name="radio-button-demo"
                                                    aria-label="purple"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full my-8">
                                            <div className="w-full mb-2">
                                                <span className={classes.lightTitle}> Size </span>
                                            </div>
                                            <div>
                                                <Checkbox
                                                    style={{padding: 0}}
                                                    checkedIcon={<div className={classes.sizeCheckboxChecked}>XS</div>}
                                                    icon={<div className={classes.sizeCheckboxUnchecked}>XS</div>}
                                                    checked={this.state.XS}
                                                    onChange={this.handleSizeChange('XS')}
                                                    value="XS"/>
                                                <Checkbox
                                                    style={{padding: 0}}
                                                    checkedIcon={<div className={classes.sizeCheckboxChecked}>S</div>}
                                                    icon={<div className={classes.sizeCheckboxUnchecked}>S</div>}
                                                    checked={this.state.S}
                                                    onChange={this.handleSizeChange('S')}
                                                    value="checkedA"/>
                                                <Checkbox
                                                    style={{padding: 0}}
                                                    checkedIcon={<div className={classes.sizeCheckboxChecked}>M</div>}
                                                    icon={<div className={classes.sizeCheckboxUnchecked}>M</div>}
                                                    checked={this.state.M}
                                                    onChange={this.handleSizeChange('M')}
                                                    value="M"/>
                                                <Checkbox
                                                    style={{padding: 0}}
                                                    checkedIcon={<div className={classes.sizeCheckboxChecked}>L</div>}
                                                    icon={<div className={classes.sizeCheckboxUnchecked}>L</div>}
                                                    checked={this.state.L}
                                                    onChange={this.handleSizeChange('L')}
                                                    value="L"/>
                                                <Checkbox
                                                    style={{padding: 0}}
                                                    checkedIcon={<div className={classes.sizeCheckboxChecked}>XL</div>}
                                                    icon={<div className={classes.sizeCheckboxUnchecked}>XL</div>}
                                                    checked={this.state.XL}
                                                    onChange={this.handleSizeChange('XL')}
                                                    value="XL"/>
                                            </div>
                                        </div>
                                        <div className="w-full my-8 flex flex-row">
                                            <Fab size="small" aria-label="Subtract" className={classes.addRemoveIcon}
                                                 onClick={this.addSubtractAmount.bind(this, 'subtract')}>
                                                <SubtractIcon/>
                                            </Fab>

                                            <div
                                                className="shadow appearance-none border rounded w-16 text-gray-700 rounded-full text-center mx-2">
                                                <span className={classes.addRemoveText}>{this.state.amount}</span>
                                            </div>

                                            <Fab size="small" aria-label="Add" className={classes.addRemoveIcon}
                                                 onClick={this.addSubtractAmount.bind(this, 'add')}>
                                                <AddIcon/>
                                            </Fab>
                                        </div>
                                        <div className="w-full my-8 flex flex-row">
                                            <div className="relative">
                                            <Fab color="primary" size="large"
                                                 disabled={addToCartLoading}
                                                 onClick={this.handleAddToCart.bind(this)}
                                                 style={{borderRadius: 60, height: 60, width: 220}}>
                                                <span className={classes.submitButtonText}>Add to Cart</span></Fab>
                                            { addToCartLoading && <CircularProgress color="primary" className={classes.buttonProgress} size={24} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Section>
                            <Hidden mdDown>
                                <Section>
                                    <div className="flex flex-wrap px-32">
                                        <div className="w-full flex">
                                         <span className={classes.reviewTitleText}>
                                            Product Reviews
                                        </span>
                                        </div>
                                        {
                                            reviews.map((item, index) => {
                                                return <Review key={index} rating={item.rating} name={item.name} review={item.review} />
                                            })
                                        }
                                    </div>
                                </Section>
                            </Hidden>
                            { this.props.user.customer ? <ReviewForm productId={params.id} /> :
                                <div className="w-full flex justify-center align-middle py-8" >
                                    <Link onClick={() => {this.props.showAuth(false)}} color={'primary'} style={{cursor: "pointer"}}>Log In</Link> <span className="ml-2">to Add a Review.</span>
                                </div>}
                        </div>}
                </Container>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSingleProduct: productActions.getSingleProduct,
        getProductDetails: productActions.getProductDetails,
        getProductLocations: productActions.getProductLocations,
        getProductReviews: productActions.getProductReviews,
        addToCart: cartActions.addToCart,
        updateCartItem: cartActions.updateCartItem,
        showAuth: alertActions.showAuth
    }, dispatch);
}

function mapStateToProps({product, cart, auth}) {
    return {
        user: auth.user,
        product: product.item.data,
        locations: product.locations.data,
        locationsLoading: product.locations.isLoading,
        loading: product.item.isLoading,
        reviews: product.reviews.data,
        reviewsLoading: product.reviews.isLoading,
        addToCartLoading: cart.add.isLoading,
        cartItems: cart.items.isLoading
    }
}

export default withWidth()(withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))));
