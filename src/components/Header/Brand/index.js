import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../img/logo.svg';

export default class Brand extends React.Component {
    render() {
      return(
        <h1 className="brand header-item">
          <Link id="logo" to="/"> 
            <img src={logo} className="custom-logo" alt="logo" />
            <span className="name">{this.props.siteName}</span>
          </Link>
        </h1>
      )
    }
}