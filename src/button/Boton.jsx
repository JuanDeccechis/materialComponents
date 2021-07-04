import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

class Boton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      )
  }
}

export default withTheme(Boton);
