import React from 'react';


class Sidebar extends React.Component {
    render() {
      return (
        <aside className="sidebar column">
          <h2>{this.props.pageTitle}</h2>
          {this.props.children}
        </aside>
      )
    }
}

export default Sidebar;