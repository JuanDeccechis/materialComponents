import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import { withRouter, NavLink } from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import './notification.css';


class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 0,
        showNotifications: false,
        notificationData: [{
            "text": "Nuevas ofertas en nuestros planes",
            "index": 0,
            "destiny": "/register"
        }, {
            "text": "A Gerónimo Casanova le gustó tu comentario",
            "index": 1,
            "destiny": "/home"
        }, {
            "text": "Pepe Rodriguez te envió una solicitud",
            "index": 2,
            "destiny": "/home"
        }, {
            "text": "María Fernandez compartió una foto",
            "index": 3,
            "destiny": "/home"
        }, {
            "text": "Es cumpleaños de Pilar De La Canal",
            "index": 4,
            "destiny": "/home"
        }],
    };
    this.handleClickNotification = this.handleClickNotification.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickViewNotification = this.handleClickViewNotification.bind(this);
  }

  componentDidMount() {
      this.setState({ value: this.state.notificationData.length });
  }

  handleClickNotification() {
      this.setState({ showNotifications: !this.state.showNotifications });
  }

  handleClickViewNotification(notif) {
    this.handleClickDelete(notif);
    this.handleClickNotification();
  }

  handleClickDelete(notif) {
      let notificationDataUpdated = this.state.notificationData;
      const index = notificationDataUpdated.indexOf(notif);
      notificationDataUpdated.splice(index, 1);
      this.setState({ notificationData: notificationDataUpdated, value: notificationDataUpdated.length });
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
                    <NotificationsActiveIcon className={showNotifications && "active"}/>
                <span className="notification-badge-value">{value}</span>
            </div>
            }
            { showNotifications && value > 0 &&
                <div id="myDropdown" className="dropdown-content">
                    <div className="user_ctrl_box center">
                        <h2 className="dropdown-title">{notificationData.length} Notificaciones</h2>
                        { notificationData.map((notif, index) => 
                            <div className="notification_user_dropdown_menu" key={index}>
                                <NavLink to={notif.destiny} onClick={() => this.handleClickViewNotification(notif)}>
                                <span>{notif.text}</span>
                                </NavLink>
                                <span className="notification-delete" onClick={() => this.handleClickDelete(notif)}>X</span>
                            </div>
                        )}
                    </div>   
                </div>
            }
        </div>
      )
  }
}

export default withTheme(withRouter(Notification));
