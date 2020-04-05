import React from "react";
import '../styles/index.css';

export default class extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      'clicked': false,
    }
  }

  handleClick(){
    this.setState({clicked: !this.state.clicked})
  }


    render () {
      return (
        <svg
          className={this.state.clicked? `fill-current text-green-500 ${this.props.className}` : `fill-current ${this.props.className}`}
          onClick={this.handleClick.bind(this)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
        </svg>
      )
    }

}
