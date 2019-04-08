import React from 'react'
import WebService from '../components/services/WebService';
import PcbDesign from '../components/services/PcbDesign';
import Header from '../components/Header.js';

export default () => (
  <div>
    <Header active='services' />
    <WebService />
    <PcbDesign />
  </div>
)
