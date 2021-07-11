import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './nav.css';
import { withTheme } from '../context/ThemeContext';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
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
        </ul>
      )
  }
}

export default  withTheme(Nav);
