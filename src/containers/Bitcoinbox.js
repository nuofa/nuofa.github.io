import React from 'react'
import Header from '../components/Header.js';
import Video from '../components/Video.js';
import { Head } from 'react-static'
import styled from 'styled-components';

import svg from './Bitcoinbox.svg'
import png from './Bitcoinbox.svg'
import svg_setup from './Bitcoinbox_setup.svg'
import png_setup from './Bitcoinbox_setup.png'
import svg_secure from './Bitcoinbox_secure.svg'
import png_secure from './Bitcoinbox_secure.png'
import svg_chart from './Bitcoinbox_chart.svg'
import png_chart from './Bitcoinbox_chart.png'

const Green = styled.div`
  background: ${props => props.theme.bgSuccess};
  padding-top: 3em;
  padding-bottom: 3em;
  @media (min-width: 992px) {
    h1 {
      padding-top: 3em;
    }
  }
`

const Black = styled.div`
  background: black;
  color: white;
  padding: 4em 0 4em 0;
`;

const Gray = styled.div`
  background: ${props => props.theme.bgGray};
  padding-top: 3em;
  padding-bottom: 3em;
  @media (max-width: 767.98px) {
    img, object {
      width: 40%;
    }
  }
`

const White = styled.div`
  background: ${props => props.theme.bgWhite};
  padding-top: 3em;
  padding-bottom: 3em;
  @media (max-width: 767.98px) {
    img, object {
      width: 40%;
    }
  }
`

export default () => (
  <div>
    <Head>
      <title>Pay by Bitcoin anywhere anytime!</title>
      <meta prefix="og: http://ogp.me/ns#" name="description" content="Modern cryptocurrency POS system, super cheap and programmable to integrate with new coins!" />
      <meta prefix="og: http://ogp.me/ns#" property="title" content="Pay by Bitcoin anywhere anytime!" />
      <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Modern cryptocurrency POS system, super cheap and programmable to integrate with new coins!" />
      <meta prefix="og: http://ogp.me/ns#" property="og:type" content="product" />
      <meta prefix="og: http://ogp.me/ns#" property="og:image" content="/video/bitcoinbox.jpg" />
    </Head>
    <Header active="products" />
    <Green>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-right">
            <h1>BitcoinBox</h1>
            <p>Pay by Bitcoin anywhere anytime!</p>
          </div>
          <div className="col-md">
            <object className="img-fluid" type="image/svg+xml" data={svg}>
              <img className="img-fluid" src={png} alt="" />
            </object>
          </div>
        </div>
      </div>
    </Green>
    <Black>
      <div className="container">
        <h1>Watch the demo</h1>
        <Video mp4="/video/bitcoinbox.mp4" poster="/video/bitcoinbox.jpg" />
      </div>
    </Black>
    <Gray>
      <div className="container">
        <div className="row">
          <div className="col-md-2 text-center order-sm-2">
            <object className="img-fluid" type="image/svg+xml" data={svg_setup}>
              <img className="img-fluid" src={png_setup} alt="" />
            </object>
          </div>
          <div className="col-md-10 order-sm-1">
            <h1>Easy setup</h1>
            <p>There is a variety of setup procedure that helps you connect your wallet to the device easily.</p>
          </div>
        </div>
      </div>
    </Gray>
    <White>
      <div className="container">
        <div className="row">
          <div className="col-md-2 text-center">
            <object className="img-fluid" type="image/svg+xml" data={svg_secure}>
              <img className="img-fluid" src={png_secure} alt="" />
            </object>
          </div>
          <div className="col-md-10">
            <h1>Secure</h1>
            <p>BitcoinBox does not store any credential and sensitive data and it's 100% secure.</p>
          </div>
        </div>
      </div>
    </White>
    <Gray>
      <div className="container">
        <div className="row">
          <div className="col-md-2 text-center order-sm-2">
            <object className="img-fluid" type="image/svg+xml" data={svg_chart}>
              <img className="img-fluid" src={png_chart} alt="" />
            </object>
          </div>
          <div className="col-md-10 order-sm-1">
            <h1>Extra services</h1>
            <p>Besides the payment, the device shows the latest bitcoin price and major Blockchain transactions for bitcoin fans</p>
          </div>
        </div>
      </div>
    </Gray>
  </div>
)
