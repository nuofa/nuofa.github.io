import React from 'react'

import './WebService.css'
import svg from './WebService.svg'
import png from './WebService.png'

export default () => (
  <div className="WebService">
    <h1 className="text-center d-block d-md-none">International web services</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <object className="img-fluid" type="image/svg+xml" data={svg}>
            <img alt="" className="img-fluid" src={png} />
          </object>
          </div>
          <div className="col-md">
          <h1 className="d-none d-md-block">International web services</h1>
          <p>Building an International website or service could be a big challenge. The difficulty is not just translations and language issues. To have a successful service you need to integrate that service with the other services in each target country or region. Some countries have their own social network, payment system, online shopping sites, online service and some even make the restriction on other services from outside. Besides all these, some languages are totally different to be used on your website, like they are right-to-left or you cannot translate them word by word with same structures.</p>
          <p>We don’t directly make websites for businesses but thank to our international team, we offer a comprehensive package for your international project when we make it completely or part of it for you.</p>
        </div>
      </div>
    </div>
  </div>
)