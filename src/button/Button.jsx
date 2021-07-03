import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <button>contenido</button>
      )
  }
}

export default withTheme(Button);
