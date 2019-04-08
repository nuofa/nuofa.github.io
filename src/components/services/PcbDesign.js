import React from 'react'

import './PcbDesign.css'
import svg from './PcbDesign.svg'
import png from './PcbDesign.png'

export default () => (
  <div className="PcbDesign">
    <h1 className="text-center d-block d-md-none">PCB Design</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-3 order-md-2">
          <object className="img-fluid" type="image/svg+xml" data={svg}>
            <img alt="" className="img-fluid" src={png} />
          </object>
          </div>
          <div className="col-md order-md-1">
          <h1 className="d-none d-md-block">PCB Design</h1>
          <p>We can design any like of PCB you need for your product. You can give us the schematic, drawings or even the idea and we develop the PCB from scratch for you. Our specialty is digital 2 layer boards. For tiny devices like smartwatches to large complex devices.</p>
          <p>If you want to make your product cheap and knock out your competitors, we help you to do that! The difficulty and innovation in PCB design are not just to make it, it's to make it cheap and reliable too.</p>
          <p>We can make Bluetooth, WiFi, NFC, 3G, GPS, USB, HDMI, sensors enabled PCBs in days!</p>
        </div>
      </div>
    </div>
  </div>
)