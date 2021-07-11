import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import Volume from '../volume/volume';
import SettingsIcon from '@material-ui/icons/Settings';
import './settings.css';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 10,
        showSettings: false,
        showNotifications: true,
    };
    this.handleClickSettings = this.handleClickSettings.bind(this);
}

  handleClickSettings() {
      this.setState({ showSettings: !this.state.showSettings });
  }

  render(){
    const { showSettings } = this.state;

      return(
        <div className="settings-relative">

            <div className="settings-container settings-not-empty" onClick={this.handleClickSettings}>
            <SettingsIcon className={showSettings && "active"} />
        </div>
        
            { showSettings &&
                <div id="mySettings" className="dropdown-content">
                <div className="user_ctrl_box center">
                    <div className="settings_user_dropdown_menu">
                    <span>
                        <div className="container-switcher">
                            <span className="label-switcher">Mostrar notificaciones: </span>
                            <label className="switch">
                                <input type="checkbox" checked={this.props.notificationsEnabled} onChange={this.props.handleSwitchNotifications} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                    </span>
                    </div>
                    <div className="settings_user_dropdown_menu" onClick={this.handleClickSettings}>
                    <span>
                        <div className="container-switcher">
                            <div>Notificar mi actividad a: </div>
                            <div>Amigos </div>
                        </div>

                    </span>
                    </div>
                    <div className="settings_user_dropdown_menu" onClick={this.handleClickSettings}>
                    <span>Mi Cuenta</span>
                    </div>
                    <div className="settings_user_dropdown_menu" onClick={this.handleClickSettings}>
                        <Volume />
                    </div>
                   
                </div>   
            </div>
            }
        </div>
      )
  }
}

export default withTheme(Settings);
