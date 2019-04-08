import React from 'react'
import Header from '../components/Header.js';
import styled from 'styled-components';

import deviceappstore_svg from './Products_deviceappstore.svg'
import deviceappstore_png from './Products_deviceappstore.png'
import space_svg from './Products_space.svg'
import space_png from './Products_space.png'
import aibox_svg from './Products_aibox.svg'
import aibox_png from './Products_aibox.png'
import bitcoinbox_svg from './Products_bitcoinbox.svg'
import bitcoinbox_png from './Products_bitcoinbox.png'
import paypalbox_svg from './Products_paypalbox.svg'
import paypalbox_png from './Products_paypalbox.png'
import eprism_svg from './Products_eprism.svg'
import eprism_png from './Products_eprism.png'
import stemiot_svg from './Products_stemiot.svg'
import stemiot_png from './Products_stemiot.png'

const Section = styled.div`
  padding: 4em 0 4em 0;
  line-height: 1.8em;
  .order-md-1 {
    text-align: right;
  }
  .order-md-2 {
    text-align: left;
  }
`;

const Black = styled.div`
  background-color: black;
  padding: 3em 0 3em 0;
  h1, p {
    color: white;
  }
`

const Green = styled(Section)`
  background: ${props => props.theme.bgSuccess};
  padding-top: 4em;
  padding-bottom: 4em;
  @media (min-width: 992px) {
    h1 {
      padding-top: 2em;
    }
  }
`

const Gray = styled(Section)`
  background: ${props => props.theme.bgGray};
  padding-top: 4em;
  padding-bottom: 4em;
  h2 {
    padding: .8em 0 .4em 0;
  }
  .image-center {
    height: 100%;
  }
`

const White = styled(Section)`
  background: ${props => props.theme.bgWhite};
  padding-top: 4em;
  padding-bottom: 4em;
  @media (min-width: 992px) {
    .col-md-4:first-child {
      text-align: right;
    }
  }
  img, object {
    height: 100%;
  }
`

export default () => (
  <div>
    <Header active='products' />
    <Black>
      <div className="container">
        <object className="img-fluid" type="image/svg+xml" data={space_svg}>
          <img alt="" className="img-fluid" src={space_png} />
        </object>
      </div>
    </Black>
    <White>
      <div className="container">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 order-md-2">
            <object className="img-fluid" type="image/svg+xml" data={deviceappstore_svg}>
              <img alt="" className="img-fluid" src={deviceappstore_png} />
            </object>
          </div>
          <div className="col-md align-self-center order-md-1">
            <h1>DeviceAppStore</h1>
            <p>A complete solution to update IoT firmware. It helps the user to easily update the registered firmware and also help developers to publish the new version on the store.</p>
            <a className="btn btn-primary" href="/signin/"> More... </a>
          </div>
        </div>
      </div>
    </White>
    <Gray>
      <div className="container">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 order-md-1">
            <object className="img-fluid" type="image/svg+xml" data={aibox_svg}>
              <img alt="" className="img-fluid" src={aibox_png} />
            </object>
          </div>
          <div className="col-md align-self-center order-md-2">
            <h1>AiBox</h1>
            <p>AiBox is a set of tools and libraries that help you to make an smart IoT device. Imagine a tiny lower power device and intelligent like an insect!</p>
            <a className="btn btn-primary" href="/signin/"> More... </a>
          </div>
        </div>
      </div>
    </Gray>
    <White>
      <div className="container">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 order-md-2">
            <object className="img-fluid" type="image/svg+xml" data={bitcoinbox_svg}>
              <img alt="" className="img-fluid" src={bitcoinbox_png} />
            </object>
          </div>
          <div className="col-md align-self-center order-md-1">
            <h1>BitcoinBox</h1>
            <p>Secure, Cheap and reliable Bitcoin point of sale system</p>
            <a className="btn btn-primary" href="/signin/"> More... </a>
          </div>
        </div>
      </div>
    </White>
    <Gray>
      <div className="container">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 order-md-1">
            <object className="img-fluid" type="image/svg+xml" data={paypalbox_svg}>
              <img alt="" className="img-fluid" src={paypalbox_png} />
            </object>
          </div>
          <div className="col-md align-self-center order-md-2">
            <h1>PayPalBox</h1>
            <p>Turn your ePrism device into a PayPal point of sale for your store for free!</p>
            <a className="btn btn-primary" href="/signin/"> More... </a>
          </div>
        </div>
      </div>
    </Gray>
    <White>
      <div className="container">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 order-md-2">
            <object className="img-fluid" type="image/svg+xml" data={eprism_svg}>
              <img alt="" className="img-fluid" src={eprism_png} />
            </object>
          </div>
          <div className="col-md align-self-center order-md-1">
            <h1>ePrism</h1>
            <p>A cheap tablet-like PC for your IoT projects</p>
            <a className="btn btn-primary" href="/signin/"> More... </a>
          </div>
        </div>
      </div>
    </White>
    <Gray>
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-1">
            <object className="img-fluid" type="image/svg+xml" data={stemiot_svg}>
              <img alt="" className="img-fluid" src={stemiot_png} />
            </object>
          </div>
          <div className="col-md align-self-center order-md-2">
            <h1 className="d-none d-md-block">Stem IoT</h1>
            <p>Stem IoT is a very small, cheap and efficient hardware boilerplate for IoT and small electronic projects.</p>
            <a className="btn btn-primary" href="/signin/"> More... </a>
          </div>
        </div>
      </div>
    </Gray>
  </div>
)
