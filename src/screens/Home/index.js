/**
 *
 * if a user select a department and category in the navigation menu
 * - Filter should display Department and category dynamically when a user select a department and category
 *  on the navigation bar
 * - Filter should dynamically display attribute values like Size and Color from backend
 * - Price on the Price slider should change as the user slide through in the Filter
 * - Implement functionalities for search in the Nav bar and filter bar
 * - Implement funtionality for reset on filter component
 * - Implement pagination for products
 *
 */
import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import {
  withStyles,
  Paper,
  Radio,
  Checkbox,
  Button,
  Fab,
  TextField,
  Link
} from "@material-ui/core";
import { Slider } from "material-ui-slider";
import withWidth from "@material-ui/core/withWidth";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Close from "@material-ui/icons/Close";
import * as productActions from "../../store/actions/products";
import * as categoryActions from "../../store/actions/categories";
import * as attributeActions from "../../store/actions/attributes";
import styles from "./styles";
import { Container, Section } from "../../components/Layout";
import ListProduct from "../../components/ListProduct";
import Banner from "../../components/Banner";
import SubscribeBar from "../../components/SubscribeBar";
import "./styles.css";

const ATTRIBUTE_MAP = {
  1: "Size",
  2: "Color"
};

class Home extends Component {
  state = {
    search: "",
    currentProducts: [],
    productCount: 0,
    currentCategories: [],
    attributeIds: []
  };

  componentDidMount() {
    this.props.getAllProducts({
      page: 1,
      description_length: 120
    });
    this.props.getAllCategories();
    this.props.getAllAttributes();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      products,
      count,
      categories,
      departmentCategories,
      searchResults,
      searchCount,
      departmentProducts,
      departmentProductsCount,
      categoryProductsResult,
      categoryProductsCount,
      attributes
    } = this.props;
    const mappedAttributes = attributes.map(
      attribute => attribute.attribute_id
    );

    if (prevProps.products !== products) {
      this.setState({
        currentProducts: products,
        productCount: count
      });
    } else if (prevProps.categories !== categories) {
      this.setState({
        currentCategories: categories
      });
    } else if (prevProps.departmentCategories !== departmentCategories) {
      this.setState({
        currentCategories: departmentCategories
      });
    } else if (
      searchResults.length &&
      prevProps.searchResults !== searchResults
    ) {
      this.setState({
        currentProducts: searchResults,
        productCount: searchCount
      });
    } else if (
      departmentProducts.length &&
      prevProps.departmentProducts !== departmentProducts
    ) {
      this.setState({
        currentProducts: departmentProducts,
        productCount: departmentProductsCount
      });
    } else if (
      categoryProductsResult.length &&
      prevProps.categoryProductsResult !== categoryProductsResult
    ) {
      this.setState({
        currentProducts: categoryProductsResult,
        productCount: categoryProductsCount
      });
    } else if (attributes.length && prevProps.attributes !== attributes) {
      this.props.getAttributeValues(mappedAttributes);
    }
  }

  handlePageClick = data => {
    let selected = data.selected;
    const contentPerPage = 20;
    const {
      searchCount,
      departmentProductsCount,
      departmentProducts,
      departmentId,
      categoryId,
      categoryProductsCount,
      categoryProductsResult,
      searchValue
    } = this.props;
    if (searchCount > contentPerPage && searchValue) {
      this.props.searchProducts({
        query_string: this.state.search || searchValue,
        all_words: "on",
        page: 1 + selected,
        description_length: 120
      });
    } else if (departmentProducts && departmentProductsCount > contentPerPage) {
      console.log(">>>>>paginate dept", departmentProductsCount);
      this.props.getProductsInDepartment({
        department_id: departmentId,
        page: 1 + selected
      });
    } else if (
      categoryProductsResult &&
      categoryProductsCount > contentPerPage
    ) {
      console.log(">>>>>paginate cat", categoryProductsCount);
      this.props.getProductsInCategory({
        category_id: categoryId,
        page: 1 + selected
      });
    } else {
      this.props.getAllProducts({
        page: 1 + selected,
        description_length: 120
      });
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    const { search } = this.state;
    this.props.searchProducts({
      query_string: search,
      all_words: "on",
      page: 1,
      description_length: 120
    });
    if (this.state.search && !this.props.searchResults.length) {
      this.setState({ currentProducts: [], productCount: "" });
    }
  };

  handleClearSearch = () => {
    this.setState({ search: "" }, () => {
      this.props.getAllProducts({
        page: 1,
        description_length: 120
      });
    });
  };

  handleToggleCategories = () => {
    this.props.getAllCategories();
  };

  handleCategoryClick = e => {
    e.preventDefault();
    const category_id = parseInt(e.target.id);
    this.props.getProductsInCategory({ category_id, page: 1 });
  };

  render() {
    const { classes, attributes, attributeValues } = this.props;
    const { currentProducts, productCount, currentCategories } = this.state;
    const mappedValues = {};
    attributeValues.forEach(value => {
      Object.entries(value).map(
        ([key, value]) => (mappedValues[ATTRIBUTE_MAP[key]] = value)
      );
    });
    const colorValues = mappedValues.Color;
    const sizeValues = mappedValues.Size;

    return (
      <div className={classes.root}>
        <Container>
          <Section>
            <div className="flex mb-4 contentHolder">
              <div className="w-1/4 filterSection">
                <Paper className={classes.controlContainer} elevation={1}>
                  <div className={classes.filterBlock}>
                    <div className={classes.titleContainer}>
                      <span className={classes.controlsTopTitle}>
                        Filter Items
                      </span>
                    </div>
                    <div className={classes.filterItems}>
                      <div className="py-1">
                        <Link onClick={this.handleToggleCategories}>
                          Categories
                        </Link>
                      </div>
                      <div className="py-1 pb-2">
                        {currentCategories.map((category, index) => (
                          <div key={index} className={classes.isGrey}>
                            <Link
                              id={category.category_id}
                              onClick={this.handleCategoryClick}
                            >
                              {category.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={classes.filterBodyContainer}>
                    {attributes.map((attribute, index) => {
                      if (attribute.name === "Color") {
                        return (
                          <div
                            className={classes.colorBlock}
                            key={index}
                            id={attribute.attribute_id}
                          >
                            <div className={classes.titleContainer}>
                              <span
                                className={classes.controlsTitle}
                                id={attribute.attribute_id}
                              >
                                {attribute.name}
                              </span>
                            </div>

                            <div className={classes.colorRadiosContainer}>
                              {colorValues &&
                                colorValues.map((attribute, index) => (
                                  <Radio
                                    style={{
                                      padding: 0,
                                      color: `${
                                        attribute.value === "White"
                                          ? "#eee"
                                          : attribute.value
                                      }`
                                    }}
                                    size="small"
                                    key={index}
                                    icon={<FiberManualRecord />}
                                    value={attribute.value}
                                    name="radio-button-demo"
                                    aria-label="A"
                                  />
                                ))}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div className={classes.sizesBlock} key={index}>
                            <div className={classes.titleContainer}>
                              <span
                                className={classes.controlsTitle}
                                id={attribute.attribute_id}
                              >
                                {attribute.name}
                              </span>
                            </div>

                            <div className={classes.sizeCheckboxes}>
                              {sizeValues &&
                                sizeValues.map((attribute, index) => (
                                  <Checkbox
                                    key={index}
                                    style={{ padding: 0 }}
                                    checkedIcon={
                                      <div
                                        className={classes.sizeCheckboxChecked}
                                      >
                                        {attribute.value}
                                      </div>
                                    }
                                    icon={
                                      <div
                                        className={
                                          classes.sizeCheckboxUnchecked
                                        }
                                      >
                                        {attribute.value}
                                      </div>
                                    }
                                    value={attribute.value}
                                  />
                                ))}
                            </div>
                          </div>
                        );
                      }
                    })}

                    <div className={classes.sliderBlock}>
                      <div className={classes.titleContainer}>
                        <span className={classes.controlsTitle}>
                          Price Range
                        </span>
                      </div>
                      <div className={classes.sliderContainer}>
                        <Slider
                          color="#f62f5e"
                          defaultValue={[200, 385]}
                          min={1}
                          max={500}
                          range
                        />
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          height: "24px"
                        }}
                      >
                        <div className={classes.rangesText}>{`£ 375`}</div>
                        <div style={{ flexGrow: 1 }} />
                        <div className={classes.rangesText}>{`£ 500`}</div>
                      </div>
                    </div>
                    <div className={classes.searchBlock}>
                      <div className={classes.titleContainer}>
                        <span className={classes.controlsTitle}>
                          Search keyword
                        </span>
                      </div>
                      <div className={classes.searchContainer}>
                        <TextField
                          inputProps={{
                            className: classes.filterSearchInput
                          }}
                          placeholder="Enter a keyword to search..."
                          margin="dense"
                          variant="outlined"
                          name="search"
                          value={this.state.search}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={classes.footerBlock}>
                    <Fab
                      color="primary"
                      size="small"
                      className={classes.coloredButton}
                      style={{ borderRadius: 24, height: 35, width: 90 }}
                      onClick={this.handleSearch}
                    >
                      <span className={classes.submitButtonText}>Apply</span>
                    </Fab>

                    <Button
                      className={classes.clearText}
                      onClick={this.handleClearSearch}
                    >
                      <Close className={classes.boldIcon} />
                      <span>Reset</span>
                    </Button>
                  </div>
                </Paper>
              </div>
              <div className="products__contents">
                {currentProducts.length < 20 && productCount < 20 ? (
                  ""
                ) : (
                  <ReactPaginate
                    previousLabel={"< Previous"}
                    nextLabel={"Next >"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(productCount / 20)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                )}

                <div className="w-3/4 flex flex-wrap ml-6 productsSection">
                  {currentProducts.map((product, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 mb-4"
                    >
                      <ListProduct product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
          <Section>
            <Banner />
          </Section>
          <Section>
            <SubscribeBar />
          </Section>
        </Container>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllProducts: productActions.getAllProducts,
      searchProducts: productActions.searchProducts,
      getAllCategories: categoryActions.getAllCategories,
      getProductsInDepartment: productActions.getProductsInDepartment,
      getProductsInCategory: productActions.getProductsInCategory,
      getAllAttributes: attributeActions.getAllAttributes,
      getAttributeValues: attributeActions.getAttributeValues
    },
    dispatch
  );
}

function mapStateToProps({ products, categories, attributes, departments }) {
  return {
    products: products.all.data.rows,
    count: products.all.data.count,
    searchResults: products.search.data.rows,
    searchCount: products.search.data.count,
    searchValue: products.search.data.query_string,
    categories: categories.allCategories.data.rows,
    departmentCategories: categories.departmentCategories.data,
    departmentProducts: products.departmentProducts.data.rows,
    departmentProductsCount: products.departmentProducts.data.count,
    departmentId: products.departmentProducts.data.department_id,
    categoryProductsResult: products.categoryProducts.data.rows,
    categoryProductsCount: products.categoryProducts.data.count,
    categoryId: products.categoryProducts.data.category_id,
    attributes: attributes.allAttributes.data,
    attributeValues: attributes.attributeValues.data
  };
}

export default withWidth()(
  withStyles(styles, { withTheme: true })(
    withRouter(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(Home)
    )
  )
);
