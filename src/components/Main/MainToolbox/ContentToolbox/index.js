import React from 'react';
import Category from './Category';


export default class ContentToolbox extends React.Component {
  render() {
    const filteredCategories = this.props.filteredList;
    return (
      <div className="primary content-area column">
        <div id="main" className="site-main grid-container">
          {filteredCategories.map(element => (
            element.links.length > 0 ? <Category key={element.id} currentCategory={element} /> : null 
          ))} 
        </div>
      </div>
    )
  }
}