import React, { Component } from 'react'
import './Nav.css';

export class Nav extends Component {
  render() {
    return (
      <>
        <header className="navigation">
          <div className="search">
            <input type="text" placeholder="Search.."/>
            <i className="fas fa-search"></i>
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <i className="far fa-envelope"></i>
              </li>
              <li>
                <i className="far fa-bell"></i>
              </li>
              <li>
                <i className="far fa-user"></i>
              </li>
              <li>
                <span>Alfonso Dalix</span>
              </li>
              <li>
                <i className="fas fa-sign-out-alt"></i>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
}

export default Nav;
