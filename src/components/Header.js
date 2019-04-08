import React, {Component} from 'react'

import './Header.css'

export default class Header extends Component {

  render () {
    return (
      <div className="Header">
        <div className="container">
          <nav>
            <a className="navbar-brand" href="/">NOVA<span className="text-success">TECHNOLOGY</span><span className="text-danger">BETA</span></a>
            <ul>
              <li className={this.props.active == 'home'     ? 'active' : ''}><a href="/">Home <span className="sr-only">(current)</span></a></li>
              <li className={this.props.active == 'products' ? 'active' : ''}><a href="/products/">Products</a></li>
              {/*<li className={this.props.active == 'services' ? 'active' : ''}><a href="/services/">Services</a></li>*/}
              <li className={this.props.active == 'contacts' ? 'active' : ''}><a href="/contacts/">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }

}