import React, {Component} from 'react'
import {
    withStyles,
    Paper,
    CircularProgress,
    Radio,
    Checkbox,
    List,
    ListItem,
    ListItemText,
    Button,
    Fab
} from '@material-ui/core';
import {Slider} from 'material-ui-slider';
import withWidth from '@material-ui/core/withWidth';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import * as productActions from '../../store/actions/products'
import TextGrid from '../../components/TextGrid'
import departmentCategories from "../../store/reducers/categories/categories_in_department.reducer";
import byDepartment from "../../store/reducers/products/department_products.reducer";
import styles from './styles';
import {Container, Section} from '../../components/Layout';
import ListProduct from '../../components/ListProduct';
import Banner from '../../components/Banner';
import SubscribeBar from '../../components/SubscribeBar';
import * as categoriesActions from '../../store/actions/categories'

const brands = ['Ralph Lauren', 'Nike', 'Hugo Boss', 'Tommy Hilfiger', 'Gucci', 'Burberry', 'Lacoste', 'Adidas'];

const initialState = {
    color: 'a',
    XS: false,
    S: false,
    M: true,
    L: false,
    XL: false,
    min: 100,
    max: 375,
    'Ralph Lauren': false,
    'Nike': false,
    'Hugo Boss': false,
    'Tommy Hilfiger': false,
    'Gucci': false,
    'Burberry': false,
    'Lacoste': false,
    'Adidas': false
};

class Home extends Component {

    state = initialState;

    handleRadioChange(event) {
        this.setState({
            color: event.target.value
        });
    }

    handleSliderChange([min, max]) {
        this.setState({
            min,
            max
        });
    }

    handleClear() {
        this.setState(initialState);
    }

    handleSizeChange = name => event => {
        this.setState({...this.state, [name]: event.target.checked});
    };

    handleBrandToggle = value => () => {
        this.setState({
            [value]: !this.state[value]
        });
    };

    componentWillMount() {
        const {match: {params}} = this.props;

        const isCategory = _.has(params, 'category_id');
        const isDepartment = _.has(params, 'department_id');



        if (isDepartment && !isCategory) {
            this.props.getCategoriesInDepartment({
                department_id: params.department_id,
                page: 1,
                limit: 9,
                description_length: 120
            });
            this.props.getDepartmentProducts({
                department_id: params.department_id,
                page: 1,
                limit: 9,
                description_length: 120
            })
        } else if(isCategory) {
            this.props.getCategoryProducts({
                category_id: params.category_id,
                page: 1,
                limit: 9,
                description_length: 120
            })
        } else {
            this.props.getAllProducts({
                page: 1,
                limit: 9,
                description_length: 120
            });
        }

        this.props.getAllCategories({
            page: 1,
            limit: 9,
            description_length: 120
        });
    }

    componentDidMount() {
        const {match: {params}} = this.props;

    }


    render() {
        const {classes, products, departmentProducts, categoryProducts, match: {params}, departments, categories, allCategories} = this.props;
        const {min, max} = this.state;

        const isCategory = _.has(params, 'category_id');
        const isDepartment = _.has(params, 'department_id');

        let currentProducts =  isDepartment && !isCategory ? departmentProducts : isCategory ? categoryProducts : products;

        const categoryObject = _.find(allCategories, 'category_id', params.category_id - 1);
        const departmentObject = _.find(departments, 'department_id', params.department_id - 1);
        return (
            <div className={classes.root}>
                {departments && departments.length > 0 ? <Container>
                        {(departmentObject && categories && categories.length > 0 && !isCategory) ? <Section>
                            <TextGrid department={departmentObject} categories={categories} />
                        </Section> : null }

                        <Section>
                            <div className="flex mb-4">
                                <div className="w-1/4">
                                    <Paper className={classes.controlContainer} elevation={1}>
                                        <div className={classes.filterBlock}>
                                            <div className={classes.titleContainer}>
                                            <span className={classes.controlsTopTitle}>
                                                Filter Items
                                            </span>
                                            </div>
                                            {isCategory && <div className="py-1">Category: {categoryObject && categoryObject.name}</div>}
                                            {isDepartment && <div className="py-1 pb-2">Department: {departmentObject && departmentObject.name}</div>}
                                        </div>
                                        <div className={classes.colorBlock}>
                                            <div className={classes.titleContainer}>
                                            <span className={classes.controlsTitle}>
                                                Color
                                            </span>
                                            </div>
                                            <div className={classes.colorRadiosContainer}>
                                                <Radio
                                                    style={{padding: 0, color: '#6eb2fb'}}
                                                    checked={this.state.color === 'a'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="a"
                                                    name="radio-button-demo"
                                                    aria-label="A"
                                                />
                                                <Radio
                                                    style={{padding: 0, color: '#00d3ca'}}
                                                    checked={this.state.color === 'b'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="b"
                                                    name="radio-button-demo"
                                                    aria-label="B"
                                                />
                                                <Radio
                                                    style={{padding: 0, color: '#f62f5e'}}
                                                    checked={this.state.color === 'c'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="c"
                                                    name="radio-button-demo"
                                                    aria-label="C"
                                                />
                                                <Radio
                                                    style={{padding: 0, color: '#fe5c07'}}
                                                    checked={this.state.color === 'd'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="d"
                                                    name="radio-button-demo"
                                                    aria-label="D"
                                                />
                                                <Radio
                                                    style={{padding: 0, color: '#f8e71c'}}
                                                    checked={this.state.color === 'e'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="e"
                                                    name="radio-button-demo"
                                                    aria-label="E"
                                                />
                                                <Radio
                                                    style={{padding: 0, color: '#7ed321'}}
                                                    checked={this.state.color === 'f'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="f"
                                                    name="radio-button-demo"
                                                    aria-label="F"
                                                />
                                                <Radio
                                                    style={{padding: 0, color: '#9013fe'}}
                                                    checked={this.state.color === 'g'}
                                                    size="small"
                                                    icon={<FiberManualRecord/>}
                                                    onChange={this.handleRadioChange.bind(this)}
                                                    value="g"
                                                    name="radio-button-demo"
                                                    aria-label="G"
                                                />
                                            </div>
                                        </div>
                                        <div className={classes.sizesBlock}>
                                            <div className={classes.titleContainer}>
                                    <span className={classes.controlsTitle}>
                                        Size
                                    </span>
                                            </div>
                                            <div className={classes.sizeCheckboxes}>
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
                                        <div className={classes.sliderBlock}>
                                            <div className={classes.titleContainer}>
                                            <span className={classes.controlsTitle}>
                                                Price Range
                                            </span>
                                            </div>
                                            <div className={classes.sliderContainer}>
                                                <Slider color="#f62f5e" defaultValue={[this.state.min, this.state.max]}
                                                        value={[this.state.min, this.state.max]} min={1}
                                                        max={500} onChange={this.handleSliderChange.bind(this)} range/>
                                            </div>
                                            <div style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                                height: "24px"
                                            }}>
                                                <div className={classes.rangesText}>{`£ ${min}`}</div>
                                                <div style={{flexGrow: 1}}/>
                                                <div className={classes.rangesText}>{`£ ${max}`}</div>
                                            </div>
                                        </div>
                                        <div className={classes.brandBlock}>
                                            <div className={classes.titleContainer}>
                                    <span className={classes.controlsTitle}>
                                        Brand
                                    </span>
                                            </div>
                                            <div className={classes.brandListContainer}>
                                                <List>
                                                    {brands.map(value => (
                                                        <ListItem key={value} role={undefined} dense button
                                                                  onClick={this.handleBrandToggle(value)}
                                                                  style={{padding: "5px"}}>
                                                            <Checkbox style={{padding: 0}} checked={this.state[value]}
                                                                      tabIndex={-1}
                                                                      disableRipple/>
                                                            <ListItemText primary={value}/>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </div>
                                        </div>
                                        <div className="w-full py-4">
                                            <Fab color="primary" size="small"
                                                 style={{borderRadius: 24, height: 35, width: 90}}><span
                                                className={classes.submitButtonText}>APPLY</span></Fab>

                                            <Button onClick={this.handleClear.bind(this)} className={classes.clearText}>X
                                                Reset</Button>
                                        </div>
                                    </Paper>
                                </div>
                                <div className="w-3/4 flex flex-wrap ml-6">
                                    {currentProducts.slice(0, 6).map((product, index) => (
                                        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 mb-4">
                                            <ListProduct product={product}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap pt-4">
                                {currentProducts.slice(6, 9).map((product, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
                                        <ListProduct product={product}/>
                                    </div>
                                ))}
                            </div>
                        </Section>
                        <Section>
                            <Banner/>
                        </Section>
                        <Section>
                            <SubscribeBar/>
                        </Section>
                    </Container> :
                    <Container>
                        <Section>
                            <div className="flex justify-center align-middle pt-24" style={{height: 600}}>
                                <CircularProgress size={40}/>
                            </div>
                        </Section>
                    </Container>}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllProducts: productActions.getAllProducts,
        getDepartmentProducts: productActions.getDepartmentProducts,
        getCategoryProducts: productActions.getCategoryProducts,
        getAllCategories: categoriesActions.getAllCategories,
        getCategoriesInDepartment: categoriesActions.getCategoriesInDepartment,
    }, dispatch);
}

function mapStateToProps({products, categories, departments}) {
    return {
        products: products.all.data.rows,
        departmentProducts: products.byDepartment.data.rows,
        categoryProducts: products.byCategory.data.rows,
        categories: categories.departmentCategories.data,
        allCategories: categories.all.data.rows,
        departments: departments.all.data
    }
}

export default withWidth()(withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))));
