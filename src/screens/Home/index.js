/**
 *
 * if a user select a department and category in the navigation menu
 * - Filter should display Department and category dynamically when a user select a department and category
 *  on the navigation bar
 * - Filter should dynamically dislay attribute values like Size and Color from backend
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
import styles from "./styles";
import { Container, Section } from "../../components/Layout";
import ListProduct from "../../components/ListProduct";
import Banner from "../../components/Banner";
import SubscribeBar from "../../components/SubscribeBar";
import "./styles.css";

class Home extends Component {
  state = {
    search: "",
    currentProducts: [],
    productCount: 0,
    currentCategories: []
  };

  componentDidMount() {
    this.props.getAllProducts({
      page: 1,
      description_length: 120
    });
    this.props.getAllCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        currentProducts: this.props.products,
        productCount: this.props.count
      });
    } else if (prevProps.categories !== this.props.categories) {
      this.setState({
        currentCategories: this.props.categories
      });
    } else if (
      prevProps.departmentCategories !== this.props.departmentCategories
    ) {
      this.setState({
        currentCategories: this.props.departmentCategories
      });
    } else if (
      this.props.searchResults.length &&
      prevProps.searchResults !== this.props.searchResults
    ) {
      this.setState({
        currentProducts: this.props.searchResults,
        productCount: this.props.searchCount
      });
    } else if (
      this.props.categoryProductsResult.length &&
      prevProps.categoryProductsResult !== this.props.categoryProductsResult
    ) {
      this.setState({
        currentProducts: this.props.categoryProductsResult,
        productCount: this.props.categoryProductsCount
      });
    }
  }

  handlePageClick = data => {
    let selected = data.selected;
    if (this.props.searchResults.length) {
      this.props.searchProducts({
        query_string: this.state.search,
        all_words: "on",
        page: 1 + selected,
        description_length: 120
      });
    } else if (this.props.categoryProductsCount > 20) {
      this.props.getProductsInCategory({
        category_id: this.props.categoryId,
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
    const { classes } = this.props;

    const { currentProducts, productCount, currentCategories } = this.state;

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
                    <div className={classes.colorBlock}>
                      <div className={classes.titleContainer}>
                        <span className={classes.controlsTitle}>Color</span>
                      </div>
                      <div className={classes.colorRadiosContainer}>
                        <Radio
                          style={{ padding: 0, color: "#6eb2fb" }}
                          size="small"
                          icon={<FiberManualRecord />}
                          value="a"
                          name="radio-button-demo"
                          aria-label="A"
                        />
                        <Radio
                          style={{ padding: 0, color: "#00d3ca" }}
                          size="small"
                          icon={<FiberManualRecord />}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <Radio
                          style={{ padding: 0, color: "#f62f5e" }}
                          size="small"
                          icon={<FiberManualRecord />}
                          value="c"
                          name="radio-button-demo"
                          aria-label="C"
                        />
                        <Radio
                          style={{ padding: 0, color: "#fe5c07" }}
                          size="small"
                          icon={<FiberManualRecord />}
                          value="d"
                          name="radio-button-demo"
                          aria-label="D"
                        />
                        <Radio
                          style={{ padding: 0, color: "#f8e71c" }}
                          size="small"
                          icon={<FiberManualRecord />}
                          value="e"
                          name="radio-button-demo"
                          aria-label="E"
                        />
                        <Radio
                          style={{ padding: 0, color: "#7ed321" }}
                          size="small"
                          icon={<FiberManualRecord />}
                          value="f"
                          name="radio-button-demo"
                          aria-label="F"
                        />
                        <Radio
                          style={{ padding: 0, color: "#9013fe" }}
                          size="small"
                          icon={<FiberManualRecord />}
                          value="g"
                          name="radio-button-demo"
                          aria-label="G"
                        />
                      </div>
                    </div>
                    <div className={classes.sizesBlock}>
                      <div className={classes.titleContainer}>
                        <span className={classes.controlsTitle}>Size</span>
                      </div>
                      <div className={classes.sizeCheckboxes}>
                        <Checkbox
                          style={{ padding: 0 }}
                          checkedIcon={
                            <div className={classes.sizeCheckboxChecked}>
                              XS
                            </div>
                          }
                          icon={
                            <div className={classes.sizeCheckboxUnchecked}>
                              XS
                            </div>
                          }
                          value="XS"
                        />
                        <Checkbox
                          style={{ padding: 0 }}
                          checkedIcon={
                            <div className={classes.sizeCheckboxChecked}>S</div>
                          }
                          icon={
                            <div className={classes.sizeCheckboxUnchecked}>
                              S
                            </div>
                          }
                          value="checkedA"
                        />
                        <Checkbox
                          style={{ padding: 0 }}
                          checkedIcon={
                            <div className={classes.sizeCheckboxChecked}>M</div>
                          }
                          icon={
                            <div className={classes.sizeCheckboxUnchecked}>
                              M
                            </div>
                          }
                          value="M"
                        />
                        <Checkbox
                          style={{ padding: 0 }}
                          checkedIcon={
                            <div className={classes.sizeCheckboxChecked}>L</div>
                          }
                          icon={
                            <div className={classes.sizeCheckboxUnchecked}>
                              L
                            </div>
                          }
                          value="L"
                        />
                        <Checkbox
                          style={{ padding: 0 }}
                          checkedIcon={
                            <div className={classes.sizeCheckboxChecked}>
                              XL
                            </div>
                          }
                          icon={
                            <div className={classes.sizeCheckboxUnchecked}>
                              XL
                            </div>
                          }
                          value="XL"
                        />
                      </div>
                    </div>
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
      getProductsInCategory: productActions.getProductsInCategory
    },
    dispatch
  );
}

function mapStateToProps({ products, categories, departments }) {
  return {
    products: products.all.data.rows,
    count: products.all.data.count,
    searchResults: products.search.data.rows,
    searchCount: products.search.data.count,
    categories: categories.allCategories.data.rows,
    departmentCategories: categories.departmentCategories.data,
    categoryProductsResult: products.categoryProducts.data.rows,
    categoryProductsCount: products.categoryProducts.data.count,
    categoryId: products.categoryProducts.data.category_id
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
