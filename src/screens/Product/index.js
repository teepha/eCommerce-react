/**
  This component display single product using the product ID
  To complete this component, you need to implement the following:
  - Dynamically render product attributes, size and color
  - Show all reviews on the product
  - Hide review submission form if user is not logged in
  - Hide review submission form if a user is logged in but haven't previously ordered for the product
  - Review submission form should be visible if a logged in user has once ordered for the item
  - Hide login message if user is logged in
  - If a user click the `Add to Cart` button, the user should see an animation of how the product fly into the
    cart bag with an auto close success message, and the quantity of the item in the cart bag in the NavBar should increase
  - Dynamically render product reviews from the backend
  - Add functionality to post review
  - Add functionality to select product size, color and item quantity
  - Take initiatives to customize this component and add live to the page

  NB: YOU CAN STYLE AND CUSTOMISE THIS PAGE, BUT YOU HAVE TO USE OUR DEFAULT CLASSNAME, IDS AND HTML INPUT NAMES
*/
import React, { Component } from "react";
import {
  withStyles,
  Radio,
  Checkbox,
  Fab,
  CircularProgress,
  Hidden,
  Link
} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import AddIcon from "@material-ui/icons/Add";
import SubtractIcon from "@material-ui/icons/Remove";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import StarRatings from "react-star-ratings";
import classNames from "classnames";
import { Carousel } from "react-responsive-carousel";
import systemConfig from "../../config/system";
import * as productActions from "../../store/actions/product";
import * as alertActions from "../../store/actions/alerts";
import * as attributeActions from "../../store/actions/attributes";
import styles from "./styles";
import { Container, Section } from "../../components/Layout";
import Review from "../../components/Review";
import ReviewForm from "./ReviewForm";

class Product extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    // this.props.showAuth()
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
    this.props.getAttributesInProduct({
      product_id: params.id
    });
  }

  render() {
    const {
      classes,
      product,
      reviews,
      loading,
      locations,
      locationsLoading,
      productAttributes,
      match: { params }
    } = this.props;
    const isLoading = loading || !product.image || locationsLoading;
    const isDiscounted = parseFloat(product.discounted_price) > 0;

    const colorAttributes = productAttributes.filter(
      attributes => attributes.attribute_name === "Color"
    );
    const sizeAttributes = productAttributes.filter(
      attributes => attributes.attribute_name === "Size"
    );

    const reviewRatings = reviews.filter(
      review => review.rating >= 1 && review.rating <= 5
    );

    const initialValue = 0;
    const ratingsSum = reviewRatings.reduce(
      (accumulator, review) => accumulator + review.rating,
      initialValue
    );
    const ratingsAverage = Number(
      (ratingsSum / reviewRatings.length).toPrecision(2)
    );

    return (
      <div className={classes.root}>
        <Container className="product-details">
          {isLoading ? (
            <Section>
              <div className="flex flex-wrap shadow flex justify-center py-24 bg-white">
                <CircularProgress size={40} color="primary" />
              </div>
            </Section>
          ) : (
            <div>
              <Section>
                <div className="flex flex-wrap shadow bg-white">
                  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center align-middle pt-10">
                    <Carousel
                      showArrows={true}
                      showIndicators={false}
                      showStatus={false}
                    >
                      <div className={classes.carouselImageContainer}>
                        <img
                          src={`${systemConfig.imageBaseUrl}${product.image}`}
                          alt="Product"
                        />
                      </div>
                      <div className={classes.carouselImageContainer}>
                        <img
                          src={`${systemConfig.imageBaseUrl}${product.image_2}`}
                          alt="Product"
                        />
                      </div>
                    </Carousel>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-10">
                    <div className={`w-full h-8 ${classes.breadcrumbsText}`}>
                      Home <span className="ml-4" /> • <span className="ml-4" />{" "}
                      {locations[0].department_name} <span className="ml-4" /> •{" "}
                      <span className="ml-4" /> {locations[0].category_name}
                    </div>
                    <div className="w-full h-8 mt-2">
                      <StarRatings
                        rating={reviewRatings.length && ratingsAverage}
                        starRatedColor="#ffc94f"
                        starEmptyColor="#eeeeee"
                        starHoverColor="#ffc94f"
                        starDimension="20px"
                        starSpacing="1px"
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                    <div className="w-full h-8">
                      <span
                        className={`product-details-title ${classes.productTitleText}`}
                      >
                        {product.name}
                      </span>
                    </div>
                    <div className="w-full mt-4">
                      <span className={classes.productPrice}>
                        <span
                          className={classNames({
                            [classes.strikeThrough]: isDiscounted
                          })}
                        >
                          £ {product.price}
                        </span>
                        {isDiscounted && (
                          <span> | £ {product.discounted_price}</span>
                        )}
                      </span>
                    </div>
                    <div className="w-full my-8">
                      <div className="w-full mb-2">
                        <span className={classes.lightTitle}> Colour </span>
                      </div>
                      <div>
                        {colorAttributes.map((attribute, index) => (
                          <Radio
                            style={{
                              padding: 2,
                              color: `${
                                attribute.attribute_value === "White"
                                  ? "#eee"
                                  : attribute.attribute_value
                              }`
                            }}
                            size="small"
                            key={index}
                            icon={<FiberManualRecord />}
                            value={attribute.attribute_value}
                            name="radio-button-demo"
                            aria-label="blue"
                            className="product-details-color"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full my-8">
                      <div className="w-full mb-2">
                        <span className={classes.lightTitle}> Size </span>
                      </div>
                      <div>
                        {sizeAttributes.map((attribute, index) => (
                          <Checkbox
                            style={{ padding: 0 }}
                            checkedIcon={
                              <div className={classes.sizeCheckboxChecked}>
                                {attribute.attribute_value}
                              </div>
                            }
                            icon={
                              <div className={classes.sizeCheckboxUnchecked}>
                                {attribute.attribute_value}
                              </div>
                            }
                            className="product-details-size"
                            key={index}
                            value={attribute.attribute_value}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full my-8 flex flex-row">
                      <Fab
                        size="small"
                        aria-label="Subtract"
                        className={classes.addRemoveIcon}
                      >
                        <SubtractIcon />
                      </Fab>

                      <div className="shadow appearance-none border rounded w-16 text-gray-700 rounded-full text-center mx-2">
                        <span
                          className={classes.addRemoveText}
                          name="product-details-quantity"
                        >
                          2
                        </span>
                      </div>

                      <Fab
                        size="small"
                        aria-label="Add"
                        className={`increase-quantity ${classes.addRemoveIcon}`}
                      >
                        <AddIcon />
                      </Fab>
                    </div>
                    <div className="w-full my-8 flex flex-row">
                      <div className="relative">
                        <Fab
                          color="primary"
                          size="large"
                          id="btnCart"
                          style={{ borderRadius: 60, height: 60, width: 220 }}
                        >
                          <span className={classes.submitButtonText}>
                            Add to Cart
                          </span>
                        </Fab>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
              <div>
                <Hidden mdDown>
                  {reviewRatings.length ? (
                    <Section>
                      <div className="flex flex-wrap px-32">
                        <div className="w-full flex">
                          <span className={classes.reviewTitleText}>
                            Product Reviews
                          </span>
                        </div>
                        {reviewRatings.length &&
                          reviewRatings
                            .slice(0, 5)
                            .map((review, index) => (
                              <Review
                                rating={review.rating}
                                key={index}
                                name={review.name}
                                review={review.review}
                              />
                            ))}
                      </div>
                    </Section>
                  ) : (
                    ""
                  )}
                </Hidden>
                <ReviewForm productId={params.id} />
              </div>
              <div className="w-full flex justify-center align-middle py-8">
                <Link
                  onClick={() => {
                    this.props.showAuth(false);
                  }}
                  color={"primary"}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  Log In
                </Link>{" "}
                <span className="ml-2">to Add a Review.</span>
              </div>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getSingleProduct: productActions.getSingleProduct,
      getProductDetails: productActions.getProductDetails,
      getProductLocations: productActions.getProductLocations,
      getProductReviews: productActions.getProductReviews,
      getAttributesInProduct: attributeActions.getAttributesInProduct,
      showAuth: alertActions.showAuth
    },
    dispatch
  );
}

function mapStateToProps({ product, attributes, cart, auth }) {
  return {
    product: product.item.data,
    locations: product.locations.data,
    reviews: product.reviews.data,
    locationsLoading: product.locations.isLoading,
    loading: product.item.isLoading,
    productAttributes: attributes.productAttributes.data
  };
}

export default withWidth()(
  withStyles(styles, { withTheme: true })(
    withRouter(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(Product)
    )
  )
);
