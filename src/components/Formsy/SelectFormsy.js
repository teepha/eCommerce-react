import React, {Component} from 'react';
import {FormControl, FormHelperText, FilledInput, OutlinedInput, InputLabel, Input, Select} from '@material-ui/core';
import {withFormsy} from 'formsy-react';
import _ from 'lodash';

class SelectFormsy extends Component {

    changeValue = (event) => {
        this.props.setValue(event.target.value);
        if ( this.props.onChange )
        {
            this.props.onChange(event);
        }
    };

    render()
    {
        const importedProps = _.pick(this.props, [
            'autoWidth',
            'children',
            'classes',
            'displayEmpty',
            'input',
            'inputProps',
            'MenuProps',
            'multiple',
            'native',
            'onChange',
            'onClose',
            'onOpen',
            'open',
            'renderValue',
            'SelectDisplayProps',
            'value',
            'variant'
        ]);

        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
        const value = this.props.getValue();

        this.input = () => {
            switch ( importedProps.variant )
            {
                case "outlined":
                    return <OutlinedInput labelWidth={this.props.label.length * 8} id={this.props.name}/>;
                case "filled":
                    return <FilledInput id={this.props.name}/>;
                default:
                    return <Input id={this.props.name}/>
            }
        };

        return (
            <FormControl error={Boolean(errorMessage)} className={this.props.className} variant={importedProps.variant}>
                {this.props.label && (
                    <InputLabel htmlFor={this.props.name}>{this.props.label}</InputLabel>
                )}
                <Select
                    {...importedProps}
                    value={value}
                    onChange={this.changeValue}
                    input={this.input()}
                />
                {Boolean(errorMessage) && (
                    <FormHelperText>{errorMessage}</FormHelperText>
                )}
            </FormControl>
        );
    }
}

export default withFormsy(SelectFormsy);
