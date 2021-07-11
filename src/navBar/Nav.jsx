import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './nav.css';
import { withTheme } from '../context/ThemeContext';
import Notification from '../notification/notification';
import Settings from '../settings/settings';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notificationsEnabled: true
    };
    this.handleSwitchNotifications = this.handleSwitchNotifications.bind(this);
  }

  handleSwitchNotifications() {
    this.setState({ notificationsEnabled: !this.state.notificationsEnabled });
  }

  render(){
      const { notificationsEnabled } = this.state;
      return(
        <ul className="nav">
            <li>
                <NavLink exact to="/" activeClassName="active"> Home </NavLink>
            </li>
            <li>
                <NavLink to="/FAQ" activeClassName="active"> <HelpIcon /> </NavLink>
            </li>
            <li>
                <NavLink to="/login" activeClassName="active"> <AccountCircleIcon /> </NavLink>
            </li>
            { notificationsEnabled &&
                <li>
                    <Notification/>
                </li>
            }
            <li>
                <Settings notificationsEnabled={notificationsEnabled} handleSwitchNotifications={this.handleSwitchNotifications} />
            </li>
        </ul>
      )
  }
}

export default  withTheme(Nav);
