import React from 'react'
import { Head } from 'react-static'
import Header from '../components/Header.js';
import styled from 'styled-components';

import svg_stemiot from './StemIot.svg'
import png_stemiot from './StemIot.png'
import svg2_stemiot from './StemIot2.svg'
import png2_stemiot from './StemIot2.png'

const Green = styled.div`
  background: ${props => props.theme.bgSuccess};
  padding-top: 3em;
  padding-bottom: 3em;
  @media (min-width: 992px) {
    h1 {
      padding-top: 2em;
    }
  }
`

const Gray = styled.div`
  background: ${props => props.theme.bgGray};
  padding-top: 3em;
  padding-bottom: 3em;
  h2 {
    padding: .8em 0 .4em 0;
  }
`

const White = styled.div`
  background: ${props => props.theme.bgWhite};
  padding-top: 3em;
  padding-bottom: 3em;
  @media (min-width: 992px) {
    .col-md-5:first-child {
      text-align: right;
    }
  }
`

export default () => (
  <div>
    <Head>
      <title>StemIoT - Easy boilerplate for your IoT projects</title>
      <meta name="description" content="Powerful IoT PCB boilerplate for your IoT projects. StemIoT has almost anything you need to build stable and cheap IoT project." />
      <meta property="og:title" content="StemIoT, Easy boilerplate for your IoT projects" />
      <meta property="og:description" content="Powerful IoT PCB boilerplate for your IoT projects. StemIoT has almost anything you need to build stable and cheap IoT project." />
      <meta property="og:type" content="product" />
      <meta property="og:image" content={png_stemiot} />
    </Head>
    <Header active='products' />
    <Green>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <object className="img-fluid" type="image/svg+xml" data={svg_stemiot}>
              <img className="img-fluid" src={png_stemiot} alt="" />
            </object>
          </div>
          <div className="col-md-6">
            <h1><span className="text-success">Stem</span><span className="text-danger">IoT</span></h1>
            <p>Powerful IoT PCB boilerplate for your IoT projects. StemIoT has almost anything you need to build stable and cheap IoT project.</p>
            <p>We not only care about the quality design but also care about the production cost for mass production.</p>
          </div>
        </div>
      </div>
    </Green>
    <Gray>
      <div className="container">
        <h2>Modular design</h2>
        <p>
          You can remove any module to reduce the cost and the size of your final product. Since the components use standard interfaces like I2C, IPS, UART to communicate, you can replace them with your own.
        </p>
        <h2>2-layer PCB</h2>
        <p>
          The entire modules are on a 2-layer PCB. It helps to simplify PCB test and production and reduce the price of the final product. Also, all the components are assembled single-sided.
        </p>
      </div>
    </Gray>
    <White>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>WiFi</h2>
            <p>Fully functional WiFi, both client mode and AP mode.</p>

            <h2>Bluetooth</h2>
            <p>Bluetooth version 4</p>

            <h2>USB</h2>
            <p>Full duplex USB access (Virtual COM)</p>
          </div>
          <div className="col-md-2 d-none d-md-block">
            <object className="img-fluid" type="image/svg+xml" data={svg2_stemiot}>
              <img className="img-fluid" src={png2_stemiot} alt="" />
            </object>
          </div>
          <div className="col-md-5">
            <h2>Speaker</h2>
            <p>Crystal clear 2.4W stereo audio output</p>

            <h2>Microphone</h2>
            <p>High quality audio input</p>

            <h2>LCD</h2>
            <hp>Full-color 3.5" touch LCD</hp>
          </div>
        </div>
      </div>
    </White>
    <Gray>
      <div className="container">
        <h2>Programming</h2>
        <p>Depends on MCU module you can use a wide variety of programming languages integrated with other services. We provide full documentation and examples after customization.</p>
      </div>
    </Gray>
    <Green>
      <div className="container">
        <h2>Which projects use StemIoT?</h2>
        <p>4 successful public projects like <a href="/eprism/">eprism</a> and 8 prototypes uses StemIoT.</p>
      </div>
    </Green>
  </div>
)
