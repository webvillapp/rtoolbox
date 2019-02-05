import React from 'react';
import { NavLink } from "react-router-dom";

class NavigationItem extends React.Component {
  render() {
    return(
      <li className="menu-item">
        <NavLink exact={true} activeClassName='current' to={this.props.itemHref}>{this.props.itemText}</NavLink>
      </li>
    )
  }
}

export default class HeaderNavigation extends React.Component {
  render() {
    return (
      <nav className="nav header-item">
        <label htmlFor="toggler" id="menu-label">☰</label>
        <input type="checkbox" id="toggler" />
        <div className="navigation-top menu">
          <div className="menu-menu-podstawowe-container">
            <ul id="top-menu" className="menu">
              {this.props.navItems.map((element, i) => (
                <NavigationItem 
                  key={element.id} 
                  itemText={element.name} 
                  itemHref={element.path} 
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
