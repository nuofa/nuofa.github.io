import React from 'react'
import Header from '../components/Header.js';
import { Head } from 'react-static'
import styled from 'styled-components';
import Video from '../components/Video';

import svg_logo from './EPrism-logo.svg'
import png_logo from './EPrism-logo.png'
import svg_programming from './EPrism-programming.svg';
import png_programming from './EPrism-programming.png';
import jpgPic1 from './EPrism-pic1.jpg'
import webpPic1 from './EPrism-pic1.webp'
import jpgPic1Mobile from './EPrism-pic1-mobile.jpg'
import webpPic1Mobile from './EPrism-pic1-mobile.webp'

const Black = styled.div`
  background: black;
  color: white;
  padding: 4em 0 4em 0;
`;

const Green = styled.div`
  background: #3ec7c2;
  color: black;
  padding: 4em 0 4em 0;
`;

const Gray = styled.div`
  background: #f4f4f4;
  padding: 3em 0 3em 0;
  color: black;

  h2 {
    color: black;
    text-align: center;
    padding: .3em 0 .3em 0;
  }
`;

const White = styled.div`
  background-color: white;
  padding: 3em 0 3em 0;
`;

const Device = styled.div`
  border: 1px solid #ddd;
  padding: 1em;
  height: 100%;
  border-radius: .7em;
  background-color: #f6f6f6;
  display: block;
`;

const Screenshot = styled.div`
  position: relative;
  > div img,
  > div object {
    max-width: 35%;
  }
  @media (min-width: 768px) {
    > div {
      position: absolute;
      top: 15%;
    }
  }

`

export default () => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <title>ePrism - First IoT computer!</title>
      <meta property="og:title" content="ePrism - First IoT device ready to program it!" />
    </Head>
    <Header active="products" />
    <div>
      <Black>
        <div className="container">
          <Screenshot>
            <picture>
              <source srcset={webpPic1} type="image/webp" className="d-none d-md-block img-fluid" />
              <img src={jpgPic1} id="logo" alt="" className="d-none d-md-block img-fluid" />
            </picture>
            <picture>
              <source srcset={webpPic1Mobile} type="image/webp" className="d-block d-md-none img-fluid" />
              <img src={jpgPic1Mobile} id="logo" alt="" className="d-block d-md-none img-fluid" />
            </picture>
            <div>
              <h1>ePrism</h1>
              <h2>First Arduino complete solution!</h2>
              <object className="d-none d-md-block" type="image/svg+xml" data={svg_logo}>
                <img className="d-none d-md-block" src={png_logo} alt="" />
              </object>
            </div>
          </Screenshot>
          <h2>&nbsp;</h2>
          <p>Small, cheap, efficient, and a programmable device with fascinating features for the price of a launch!</p>
          <p>ePrism has 2.4" touch display, WiFi, audio output, +4MB fast flash storage, and you can program any kind of application you want and easily set it up inside of the device!</p>
          <p>The main advantage of ePrism over the other choices like a tablet is the price. If you want to automate your services with a  hardware for more than thousands of stores, clubs, classes & other places, you can use ePrism and save budget. Also, it's safer because the devices would be single purpose and very hard to misuse it.</p>
          <p>ePrism has different versions with different hardware:</p>
        </div>
      </Black>
      <Green className="d-none">
        <div className="container">
          <Video youtube="http://www.youtube.com/embed/6xisazZX9bA" />
        </div>
      </Green>
      <Gray>
        <div className="container">
          <h1>Hardware</h1>
          <p>In Spite of low cost, ePrism has a lot of features and different versions:</p>
          <div className="row">
            <div className="col-md">
              <Device>
                <h2>ePrism standard</h2>
                <ul>
                  <li>LCD TFT 2.4 full-color</li>
                  <li>0.5W mono audio output</li>
                  <li>WiFi</li>
                  <li>160 MHz CPU</li>
                  <li>4MB Flash</li>
                  <li>80K RAM</li>
                  <li>Status LED x2</li>
                </ul>
              </Device>
            </div>
            <div className="col-md">
              <Device>
                <h2>ePrism touch</h2>
                <ul>
                  <li>LCD TFT 2.4 full-color</li>
                  <li>Resistive touch</li>
                  <li>0.5W mono audio output</li>
                  <li>WiFi</li>
                  <li>160 MHz CPU</li>
                  <li>4MB Flash</li>
                  <li>80K RAM</li>
                  <li>Status LED x2</li>
                </ul>
              </Device>
            </div>
            <div className="col-md">
              <Device>
                <h2>ePrism Pro</h2>
                <ul>
                  <li>LCD TFT 2.4 full-color</li>
                  <li>Resistive touch</li>
                  <li>0.5W mono high quality audio output</li>
                  <li>WiFi</li>
                  <li>Blueooth</li>
                  <li>160 MHz CPU x2</li>
                  <li>16MB Flash</li>
                  <li>160K RAM</li>
                  <li>Status LED x2</li>
                </ul>
              </Device>
            </div>
          </div>
        </div>
      </Gray>
      <White>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <object className="img-fluid" type="image/svg+xml" data={svg_programming}>
                <img className="img-fluid" src={png_programming} alt="" />
              </object>
            </div>
            <div className="col-md-8">
              <h1>Software</h1>
              <p>The best part of this project, is the software part. You can almost program any kind of application you want and flash it into the device using just a USB cable!</p>
              <p>Unlike high-level platforms like Android and iOS, access the hardware is so simple and straightforward. You can use thousands of ready to use Arduino and C libraries to do anything you want. Also, there are too many free resource for learning the proramming language which is some cases it's even easier than mobile programming.</p>
              <p>We also provide full support, SDK &amp; sample applications for our customers.</p>
              <p>ePrism supports most of major IoT/embedded programming languages:</p>
              <ul>
                <li>C++</li>
                <li><a href="https://en.wikipedia.org/wiki/Arduino" target="_blank">Arduino</a></li>
                <li><a href="http://www.eluaproject.net/" target="_blank">eLua</a></li>
                <li><a href="https://micropython.org/" target="_blank">MicroPython</a></li>
                <li><a href="https://mongoose-os.com/" target="_blank">Mongoose OS</a></li>
              </ul>
            </div>
          </div>
          <hr/>
          <h2>What you can do?</h2>
          <p>There is no limitation for software you can write, as long as you do not exceed the hardware limitation. You can:</p>
          <ul>
            <li>Play WAV, MP3, AAC files</li>
            <li>Play stream audio from internet</li>
            <li>Show BMP, JPEG files</li>
            <li>Use HTTP, SSL, Websocket, MQTT</li>
            <li>And much more!</li>
          </ul>
        </div>
      </White>
    </div>
  </div>
)
