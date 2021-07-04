import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import './notification.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 0,
        showNotifications: false,
    };
    this.handleClickNotification = this.handleClickNotification.bind(this);
  }

  handleClickNotification() {
      this.setState({ showNotifications: !this.state.showNotifications });
  }

  render(){
    const { value, showNotifications } = this.state;

      return(
        <div className="notification-relative">
        { value === 0 ?
            <div className="notification-container">
                <NotificationsIcon />
            </div>
            :
            <div className="notification-container notification-not-empty" onClick={this.handleClickNotification}>
            <NotificationsActiveIcon />
            <span className="notification-badge-value">{value}</span>
        </div>
        }
            { showNotifications &&
                <div id="myDropdown" className="dropdown-content">
                <div className="user_ctrl_box center">
                    <div className="user_dropdown_menu">
                        <a className="icons-li   " href="home.html">
                             <span>User1</span>                                          
                        </a>
                    </div>
                    <div className="user_dropdown_menu">
                        <a className="icons-li   " href="home.html">
                             <span>User2</span>                                          
                        </a>                                           
                    </div>
                    <div className="dropdown-divider "></div>
                    <div className="user_dropdown_menu">
                    <a className="icons-li" href="subpages/your_account.html">Mi Cuenta</a> 
                    </div>
                    <div className="user_dropdown_menu">
                    <a className="icons-li" href="subpages/faq.html">Centro de ayuda</a> 
                    </div>
                    <div className="dropdown-divider "></div>
                    <div className="user_dropdown_menu">
                    <a className="icons-li" href="index.html">Cerrar sesion</a> 
                    </div>
                </div>   
            </div>
            }
        </div>
      )
  }
}

export default withTheme(Notification);