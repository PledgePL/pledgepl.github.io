import React, { Component } from 'react';
import css from "./index.scss";
import styleguideCSS from "./styles/sass/styleguide.scss";

export default class Wrapper extends Component {
  render() {
    return (
      <div locale="en">
        {this.props.children}
      </div>
    );
  }
}
