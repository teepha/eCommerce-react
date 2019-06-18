import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import themeConfig from '../../config/theme';

function Theme({children}) {
    return (
        <MuiThemeProvider theme={createMuiTheme(themeConfig.default)}>
            {children}
        </MuiThemeProvider>
    )
}


export default withRouter(Theme);
