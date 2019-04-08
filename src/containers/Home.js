import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components';

import main_svg from './Home_main.svg'
import main_png from './Home_main.png'
import ai_svg from './Home_ai.svg'
import ai_png from './Home_ai.png'
import iot_svg from './Home_iot.svg'
import iot_png from './Home_iot.png'
import blockchain_svg from './Home_blockchain.svg'
import blockchain_png from './Home_blockchain.png'
import innovation_svg from './Home_innovation.svg'
import innovation_png from './Home_innovation.png'
import Header from '../components/Header.js';

const Section = styled.div`
  padding: 4em 0 4em 0;
  line-height: 1.8em;
  h1 {
    padding-top: .8em;
    padding-bottom: .8em;
  }
`;

const Green = styled(Section)`
  background: ${props => props.theme.bgSuccess};
  color: black;
  .img-fluid {
    padding: 0 2em 0 2em;
  }
  .icon {
    font-size: 4em;
    padding: .2em;
    color: #157572;
  }
  h2 {
    padding-bottom: .6em;
  }
`;

const Black = styled(Section)`
  background-color: #111;
  color: white;
  .icon {
    font-size: 6em;
    padding-top: .3em;
    padding-bottom: .3em;
  }
  h2 {
    color: #3ec7c2;
  }
`;

const White = styled(Section)`
  background-color: white;
  padding: 3em 0 3em 0;
  h3 {
    color: #3ec7c2;
  }
  @media (min-width: 992px) {
    .col-md:nth-child(2) {
      text-align: right;
    }
    > .container > p {
      text-align: center;
    }
  }
`;

const Gay = styled(Section)`
  background-color: #EEE;
  padding: 3em 0 3em 0;
  h3 {
    color: #3ec7c2;
  }
  @media (min-width: 992px) {
    .col-md:nth-child(2) {
      text-align: right;
    }
    > .container > p {
      text-align: center;
    }
  }
`;

export default withSiteData(() => (
  <div>
    <Header active='home' />
    <Green>
      <div className="container">
        <object className="img-fluid" type="image/svg+xml" data={main_svg}>
          <img alt="" className="img-fluid" src={main_png} />
        </object>
      </div>
    </Green>
    <Black>
      <div className="container">
        <h1 className="text-center">AI. IoT. Blockchain.</h1>
        <p>Almost any high tech company in the world are doing something with one of these new technologies and trying to find better answers for their traditional needs. But it's not just that, there are many doors to unknown technologies which were not even any demand for! In our community, we try to address both traditional issues and modern challenges to make the world a better place to live.</p>
      </div>
    </Black>
    <White>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <object className="img-fluid" type="image/svg+xml" data={ai_svg}>
              <img alt="" className="img-fluid" src={ai_png} />
            </object>
          </div>
          <div className="col-md-8">
            <h1>AI</h1>
            Artificial intelligence is taking the world by storm, and many experts posit that the technology has brought us to the cusp of a fourth industrial revolution that will fundamentally alter the business landscape. AI and machine learning are responsible for a constant stream of innovation and disruption in the way organizations operate. To avoid being left behind, business leaders need to prepare for this future now.
          </div>
        </div>
        <p>
        </p>
      </div>
    </White>
    <Gay>
      <div className="container">
        <div className="row">
          <div className="col-md-3 order-md-2">
            <object className="img-fluid" type="image/svg+xml" data={iot_svg}>
              <img alt="" className="img-fluid" src={iot_png} />
            </object>
          </div>
          <div className="col-md-8 order-md-1">
            <h1>IoT</h1>
            The “Internet of Things” (IoT) has the power to change our world. IoT will play an important role in the future and there is expected to be a significant amount of cash flowing through the market in the up-coming years. Over half of major new business processes and systems will incorporate IoT elements by 2020.
          </div>
        </div>
      </div>
    </Gay>
    <Green>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <object className="img-fluid" type="image/svg+xml" data={blockchain_svg}>
              <img alt="" className="img-fluid" src={blockchain_png} />
            </object>
          </div>
          <div className="col-md-8">
            <h1>Blockchain</h1>
            Blockchain is a revolutionary technology that is likely to have a far-reaching impact on business – on a par with the transformative effect of the Internet. Not surprisingly, the huge potential promised by blockchain has prompted a flurry of research activity across different sectors as diverse organizations race to develop applications.          </div>
        </div>
        <p>
        </p>
      </div>
    </Green>
    <Black>
      <div className="container">
        <h1 className="text-center d-block d-md-none">INNOVATION</h1>
        <div className="row">
          <div className="col-md-3 order-md-2">
            <object className="img-fluid" type="image/svg+xml" data={innovation_svg}>
              <img alt="" className="img-fluid" src={innovation_png} />
            </object>    
          </div>
          <div className="col-md order-md-1">
            <h1 className="d-none d-md-block">What can we do?</h1>
            <p>Our actions stand out because we have innovation as our focus. Our community has a team of highly educated specialists in any field we work on. Passionate about our work is the key to our success and there is no passion without innovation.</p>
            <p>Do you have a tough project which fails you a couple of times and give you headech but no way to give up! Shoot us an email, talk about it with us we always have solution for your problems and we like to invite you to our community.</p>
          </div>
        </div>
      </div>
    </Black>
  </div>
))
