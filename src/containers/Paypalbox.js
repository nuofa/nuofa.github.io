import React from 'react'
import Header from '../components/Header.js';
import { Head } from 'react-static'
import styled from 'styled-components';
import Video from '../components/Video.js';

import svg_banner from './Paypalbox_banner.svg'
import png_banner from './Paypalbox_banner.png'
import './Paypalbox.css';

export default () => (
  <div>
    <Header active='products' />
    <div className="Paypalbox-green">
      <div className="container">
        <object className="img-fluid" type="image/svg+xml" data={svg_banner}>
          <img className="img-fluid" src={png_banner} alt="" />
        </object>        
      </div>
    </div>
    <div className="Paypalbox-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h2>PayPalBox</h2>
            <p>
            PayPalBox is a system on the top of ePrism services that enables you to convert your PayPal business account into a mobile Point of Sales system. PayPalBox uses the latest security methods to ensure 100% security. The users do not need any special account, they can simply set up and PayPal account and complete PayPalBox configurations and use it for real in their stores (follow interactive setup on the device).
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="Paypalbox-white">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h3>Using PayPalBox (ePrism, all versions)</h3>
            <Video mp4="/video/paypalbox.mp4" poster="/video/paypalbox.jpg" />
            <p>This version uses PayPal online payment without any application required. It could also be used by PayPalBox mobile application that can accelerate payment procedure much faster.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
