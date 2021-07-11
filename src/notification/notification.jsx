import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import './notification.css';


class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 5,
        showNotifications: false,
        notificationData: [{
            "text": "user1"
        }, {
            "text": "user2"
        }, {
            "text": "Pepe te envió una solicitud"
        }, {
            "text": "María compartió una foto"
        }, {
            "text": "A Gerónimo le gustó tu comentario"
        }],
    };
    this.handleClickNotification = this.handleClickNotification.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickNotification() {
      this.setState({ showNotifications: !this.state.showNotifications });
  }

  handleClickDelete(index) {
      console.log(index);
  }

  render(){
    const { value, showNotifications, notificationData } = this.state;

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
                        { notificationData.map((notif, index) => 
                            <div className="notification_user_dropdown_menu">
                                <span onClick={this.handleClickNotification}>{notif.text}</span>
                                <span className="notification-delete" onClick={(index) => this.handleClickDelete(index)}>X</span>
                            </div>
                        )}
                    </div>   
                </div>
            }
        </div>
      )
  }
}

export default withTheme(Notification);
