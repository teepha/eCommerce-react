import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './styles';
import StarRatings from "react-star-ratings";

class Banner extends Component {

    render() {
        const {classes, rating, review, name} = this.props;
        return (
            <div className={`w-full flex flex-wrap h-32 pt-6 ${classes.borderBottom}`}>
                <div className="w-1/4">
                    <div className="w-full review-star">
                        <StarRatings
                            rating={rating}
                            starRatedColor="#ffc94f"
                            starEmptyColor="#eeeeee"
                            starDimension="20px"
                            starSpacing="1px"
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <div className="w-full pt-4">
                        <div className={classes.reviewNameText}>
                            {name}
                        </div>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="w-full">
                        <div className={`review-text ${classes.reviewText}`}>
                            {review}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Banner);
