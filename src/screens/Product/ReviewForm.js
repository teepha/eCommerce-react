import React, {Component} from 'react';
import {Button, withStyles} from '@material-ui/core';
import StarRatings from "react-star-ratings";
import {TextFieldFormsy} from '../../components/Formsy';
import Formsy from 'formsy-react';
import styles from './styles';

class RegisterForm extends Component {

    form = React.createRef();

    render() {

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
                            rating={0}
                            changeRating={() => console.log('Star clicked')}
                            starRatedColor="#ffc94f"
                            starEmptyColor="#797979"
                            starHoverColor="#ffc94f"
                            starDimension="20px"
                            starSpacing="1px"
                            numberOfStars={5}
                            name='rating'
                            className="review-star"
                        />
                    </div>

                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="text"
                        name="review"
                        label="Your Review"
                        variant="outlined"
                        id="review"
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full mx-auto mt-16 normal-case"
                        aria-label="LOG IN"
                        id="addReview"
                        value="legacy"
                        onClick={() => console.log('Review submitted!!')}
                    >
                        Add Review
                    </Button>

                </Formsy>
            </div>
        );
    }
}

export default withStyles(styles)(RegisterForm);
