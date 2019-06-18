import React, {Component} from 'react';
import {
    GridList,
    GridListTile,
    withStyles,
    CircularProgress
} from '@material-ui/core';
import styles from './styles';
import {Container, Section} from "../../../components/Layout";
import ListProduct from "../../../components/ListProduct";
import {isWidthUp} from "@material-ui/core/withWidth";
import withWidth from "@material-ui/core/withWidth/withWidth";

class SearchDisplay extends Component {

    render() {
        const {classes, products, loading} = this.props;

        const getGridListCols = () => {
            if (isWidthUp('xl', this.props.width)) {
                return 4;
            }

            if (isWidthUp('lg', this.props.width)) {
                return 4;
            }

            if (isWidthUp('md', this.props.width)) {
                return 2;
            }

            return 1;
        };

        return (
            <div className={classes.root}>
                <Container>
                    <Section flex={true}>
                        { !loading ? <div className={classes.grid}>
                            <GridList cellHeight={'auto'} spacing={20} className={classes.gridList}
                                      cols={getGridListCols()}>
                                {products.map(item => (
                                    <GridListTile key={item.product_id}>
                                        <ListProduct product={item}/>
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div> :
                        <div className={classes.progressContainer}>
                            <CircularProgress color="primary" />
                        </div>}
                    </Section>
                </Container>
            </div>
        );
    }
}

export default withWidth()(withStyles(styles)(SearchDisplay));
