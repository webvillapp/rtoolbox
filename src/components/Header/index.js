import React from 'react';
import Brand from './Brand';
import Navigation from './Navigation';
import SearchBox from './SearchBox';

/* ### Header ### */

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <header className="wrapper container">
          <Brand siteName={"Toolbox"} />
          <Navigation navItems={this.props.navItems} />
          <SearchBox />
        </header>
      </div>
    )
  }
}