import React from "react";
import {MainDefault} from '../components';

export default class Default extends React.Component {
    render() {
      return (
          <MainDefault title={this.props.title} />
      )
    }
}