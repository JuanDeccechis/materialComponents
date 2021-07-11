import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import SaveIcon from '@material-ui/icons/Save';
import './boton.css';

class Boton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <div>

                              <button className="button-with-icon">
                              <SaveIcon className="img short-img img-button inline"/>
                              GUARDAR
                          </button>

        </div>
      )
  }
}

export default withTheme(Boton);
