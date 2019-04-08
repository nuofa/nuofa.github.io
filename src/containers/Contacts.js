import React from 'react'
import Header from '../components/Header.js';

import svg_email from './Contacts_email.svg'
import png_email from './Contacts_email.png'
import svg_tel from './Contacts_tel.svg'
import png_tel from './Contacts_tel.png'
import './Contacts.css'

export default () => (
  <div>
    <Header active='contacts' />
    <div className="Contacts">
      <div className="container">
        <div>
          <p>Shenzhen Nova Technology is a software company that focuses on designing highly scalable enterprise applications for China and Intentional markets headquartered in Shenzhen, China.</p>
          <p>We have a community of highly trained coding experts delivering the best conversion services at an offer.</p>
          <p>Locating in Shenzhen, the center of the modern digital world makes us able to easily provide all the required hardware you need with the best integration possible with your software services. We have the capability to make all the required digital hardware in Nova tech group.</p>
          <p>Another advantage of Nova is, our team is an international team and we can easily turn your products into an international service compatible with different languages and target local services in China, North America, and Middle-east.</p>
        </div>
        
        <div className="row">
          <div className="col-md-4">
            <h3>ADDRESS:</h3>
            <p><i className="icon icon-address"></i> 深圳市罗湖区桂园街道深南东路5015号金丰城大厦B座1502</p>
            <h3>PHONES:</h3>
            <p>
              <i className="icon icon-email"></i>
              <object style={{verticalAlign: 'middle', padding: '.3em'}} className="img-fluid" type="image/svg+xml" data={svg_tel}>
                <img style={{verticalAlign: 'middle', padding: '.3em'}} className="img-fluid" src={png_tel} alt="" />
              </object>
            </p>
            <h3>E-MAIL:</h3>
            <p>
              <i className="icon icon-tel"></i>
              <object style={{verticalAlign: 'middle', padding: '.3em'}} className="img-fluid" type="image/svg+xml" data={svg_email}>
                <img style={{verticalAlign: 'middle', padding: '.3em'}} className="img-fluid" src={png_email} alt="" />
              </object>
            </p>
            Download information as: vCard
          </div>
          <div className="col-md-8">
              <a href="/img/map.jpg" target="_blank">
                <img className="img-responsive center-block" src="/img/map-small.jpg" alt="" />
              </a>
              <p className="help-block text-center">(Click on the image to enlarge)</p>
            </div>
        </div>
      </div>
    </div>
  </div>
)