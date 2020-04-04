import React from "react";
import '../styles/index.css';

export default class extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      'liked': false,
    }
  }

  handleClick(){
    this.setState({liked: !this.state.liked})
  }


    render () {
      return (
        <svg
          className={this.state.liked? `fill-current text-red-700 ${this.props.className}` : `fill-current ${this.props.className}`}
          onClick={this.handleClick.bind(this)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/>
        </svg>
      )
    }

}
