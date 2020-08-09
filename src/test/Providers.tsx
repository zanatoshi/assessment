import {MuiThemeProvider, StylesProvider} from '@material-ui/core';
import {StylesOptions} from '@material-ui/styles/';
import * as React from 'react';
import theme from '../theme';

/** Allow to generate static css class names, avoid false positive in snapshot tests */
const generateClassName: StylesOptions['generateClassName'] = (rule, sheet): string =>
  `${sheet!.options.classNamePrefix}-${rule.key}`;

/** Theme provider for tests */
const Providers: React.FC = ({children}) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StylesProvider>
  );
};

export default Providers;
