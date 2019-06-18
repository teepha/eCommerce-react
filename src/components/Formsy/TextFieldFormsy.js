import React, {Component} from 'react';
import {TextField} from '@material-ui/core';
import {withFormsy} from 'formsy-react';
import _ from 'lodash';

class TextFieldFormsy extends Component {

    changeValue = (event) => {
        this.props.setValue(event.currentTarget.value);
        if ( this.props.onChange )
        {
            this.props.onChange(event);
        }
    };

    render()
    {
        const importedProps = _.pick(this.props, [
            'autoComplete',
            'autoFocus',
            'children',
            'className',
            'defaultValue',
            'disabled',
            'FormHelperTextProps',
            'fullWidth',
            'id',
            'InputLabelProps',
            'inputProps',
            'InputProps',
            'inputRef',
            'label',
            'multiline',
            'name',
            'onBlur',
            'onChange',
            'onFocus',
            'placeholder',
            'required',
            'rows',
            'rowsMax',
            'select',
            'SelectProps',
            'type',
            'variant'
        ]);

        const errorMessage = this.props.getErrorMessage();
        const value = this.props.getValue() || '';

        return (
            <TextField
                {...importedProps}
                onChange={this.changeValue}
                value={value}
                error={Boolean(errorMessage)}
                helperText={errorMessage}
            />
        );
    }
}

export default withFormsy(TextFieldFormsy);
