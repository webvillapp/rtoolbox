import React from 'react';


class CategoryTitle extends React.Component {
  render() {
    return (
      <h3 className="category-group-title">
        <img src={this.props.CategoryTitle.iconUrl} alt="category icon" /> {this.props.CategoryTitle.name}
      </h3>
    )
  }
}

class CategoryContent extends React.Component {
  render() {
    return (
      <ul className="category-group-content">
        {this.props.CategoryLinks.map(link => (
          <ListRow key={link.id} currentLink={link} />
        ))}
      </ul>
    )
  }
}

class ListRow extends React.Component {
  render() {
    return (
      <li className="element">
        <a href={this.props.currentLink.url} className="entry-title">{this.props.currentLink.name}</a>
      </li>
    )
  }
}

export default class Category extends React.Component {
  render() {
    return (
      <div className="category-group grid-item">
        <CategoryTitle CategoryTitle={this.props.currentCategory}/>
        <CategoryContent CategoryLinks={this.props.currentCategory.links}/>
      </div>
    )
  }
}
