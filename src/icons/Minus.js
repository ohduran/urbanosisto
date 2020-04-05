import React from "react";
import '../styles/index.css';

export default class extends React.Component {

  render() {
      return (
        <svg className={`fill-current ${this.props.className}`}
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm5-11H5v2h10V9z"/>
        </svg>
      )
    }
}