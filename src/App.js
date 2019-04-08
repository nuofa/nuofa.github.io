import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components'

import './App.css'
import './font.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Oswald from './fonts/Oswald-Regular.ttf';

const theme = {
  fg: 'palevioletred',
  bgSuccess: '#3ec7c2',
  bgGray: '#f4f4f4',
  bgWhite: '#fff'
};

const App = styled.div`
  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 300;
    src: url(${Oswald}) format('truetype');
  }
  h1 {
    font-family: 'Oswald', sans-serif;
  }
  p {
    font-family: 'Open Sans', sans-serif
  }
`;

const _App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <App>
        <Routes />
        <Footer />
      </App>
    </ThemeProvider>
  </Router>
)

export default hot(module)(_App)
