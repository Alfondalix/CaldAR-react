import React, { Component } from 'react'
import './Nav.css';

export class Nav extends Component {
  render() {
    return (
      <>
        <header className="navigation">
          <div className="search">
            <input type="text" placeholder="Search.."/>
            <i class="fas fa-search"></i>
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <i class="far fa-envelope"></i>
              </li>
              <li>
                <i class="far fa-bell"></i>
              </li>
              <li>
                <i class="far fa-user"></i>
              </li>
              <li>
                <span>Alfonso Dalix</span>
              </li>
              <li>
                <i class="fas fa-sign-out-alt"></i>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
}

export default Nav;
