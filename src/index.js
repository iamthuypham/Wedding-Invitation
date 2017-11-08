import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home';
import MainTheme from './theme/MainTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const rootElement = document.getElementById('main');

render(
  <MuiThemeProvider theme={MainTheme}>
    <Home />
  </MuiThemeProvider>,
  rootElement);