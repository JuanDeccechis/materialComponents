import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import './gradientDiv.css';

class GradientDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <div className="gradient-container">
        <div className="gradient-div">
        <div className="gradient-content"> </div>
        </div>
        </div>
      )
  }
}

export default withTheme(GradientDiv);
