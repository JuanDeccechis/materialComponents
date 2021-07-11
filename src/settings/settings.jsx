import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import Badge from '@material-ui/core/Badge';
import SettingsIcon from '@material-ui/icons/Settings';
import './settings.css';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 10,
        showSettings: false,
    };
    this.handleClickSettings = this.handleClickSettings.bind(this);
  }

  handleClickSettings() {
      this.setState({ showSettings: !this.state.showSettings });
  }

  render(){
    const { value, showSettings } = this.state;

      return(
        <div className="settings-relative">

            <div className="settings-container settings-not-empty" onClick={this.handleClickSettings}>
            <SettingsIcon />
        </div>
        
            { showSettings &&
                <div id="mySettings" className="dropdown-content">
                <div className="user_ctrl_box center">
                    <div className="user_dropdown_menu" onClick={this.handleClickSettings}>
                        
                             <span>User1</span>      
                    </div>
                    <div className="user_dropdown_menu" onClick={this.handleClickSettings}>
                             <span>User2</span>      
                    </div>
                    <div className="dropdown-divider "></div>
                    <div className="user_dropdown_menu" onClick={this.handleClickSettings}>
                    <span>Mi Cuenta</span>
                    </div>
                    <div className="user_dropdown_menu" onClick={this.handleClickSettings}>
                    <span>Centro de ayuda</span>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="user_dropdown_menu" onClick={this.handleClickSettings}>
                    <span>Cerrar sesion</span>
                    </div>
                </div>   
            </div>
            }
        </div>
      )
  }
}

export default withTheme(Settings);
